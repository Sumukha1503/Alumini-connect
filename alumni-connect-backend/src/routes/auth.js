import { Router, Request, Response } from 'express';
import User from '../models/User.js';
import { generateToken } from '../utils/jwt.js';
import { protect } from '../middleware/auth.js';
const router = Router();
// Register
router.post('/register', async (req, res) => {
    try {
        const { email, password, firstName, lastName, role, college, graduationYear, department } = req.body;
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with this email',
            });
        }
        // Create user
        const user = await User.create({
            email,
            password,
            firstName,
            lastName,
            role: role || 'alumni',
            college,
            graduationYear,
            department,
        });
        // Generate token
        const token = generateToken(user._id.toString());
        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;
        res.status(201).json({
            success: true,
            data: {
                user: userResponse,
                token,
            },
        });
    }
    catch (error) {
        console.error('Register error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error creating user',
        });
    }
});
// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password',
            });
        }
        // Find user
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials',
            });
        }
        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials',
            });
        }
        // Generate token
        const token = generateToken(user._id.toString());
        // Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;
        res.json({
            success: true,
            data: {
                user: userResponse,
                token,
            },
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Error logging in',
        });
    }
});
// Get current user
router.get('/me', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Error fetching user',
        });
    }
});
// Logout
router.post('/logout', (req, res) => {
    res.json({
        success: true,
        message: 'Logged out successfully',
    });
});
export default router;
//# sourceMappingURL=auth.js.map