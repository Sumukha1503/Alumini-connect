import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import College from '../models/College.js';
dotenv.config();
const seedDatabase = async () => {
    try {
        // Connect to database
        const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/alumni-connect';
        await mongoose.connect(mongoURI);
        console.log('✅ Connected to MongoDB');
        // Clear existing data
        await User.deleteMany({});
        await College.deleteMany({});
        console.log('🗑️  Cleared existing data');
        // Create demo college
        const demoCollege = await College.create({
            name: 'Demo University',
            domain: 'demo.edu',
            description: 'A demo university for testing the Alumni Connect platform',
            location: 'San Francisco, CA',
            website: 'https://demo.edu',
            isActive: true,
        });
        console.log('🏫 Created demo college');
        // Create demo users one by one to trigger pre-save hooks
        const user1 = await User.create({
            email: 'demo@alumni.com',
            password: 'password123',
            firstName: 'Demo',
            lastName: 'Alumni',
            role: 'alumni',
            college: demoCollege._id,
            graduationYear: 2020,
            department: 'Computer Science',
            currentCompany: 'Tech Corp',
            currentPosition: 'Software Engineer',
            location: 'San Francisco, CA',
            bio: 'Demo alumni account for testing',
        });
        const user2 = await User.create({
            email: 'admin@college.edu',
            password: 'admin123',
            firstName: 'Admin',
            lastName: 'User',
            role: 'college_admin',
            college: demoCollege._id,
            department: 'Administration',
            bio: 'College administrator account',
        });
        const user3 = await User.create({
            email: 'student@college.edu',
            password: 'student123',
            firstName: 'Student',
            lastName: 'User',
            role: 'student',
            college: demoCollege._id,
            graduationYear: 2026,
            department: 'Computer Science',
            bio: 'Current student account',
        });
        const user4 = await User.create({
            email: 'alice@alumni.com',
            password: 'password123',
            firstName: 'Alice',
            lastName: 'Johnson',
            role: 'alumni',
            college: demoCollege._id,
            graduationYear: 2018,
            department: 'Business Administration',
            currentCompany: 'StartupXYZ',
            currentPosition: 'Product Manager',
            location: 'New York, NY',
        });
        const user5 = await User.create({
            email: 'bob@alumni.com',
            password: 'password123',
            firstName: 'Bob',
            lastName: 'Smith',
            role: 'alumni',
            college: demoCollege._id,
            graduationYear: 2019,
            department: 'Electrical Engineering',
            currentCompany: 'Innovation Labs',
            currentPosition: 'Senior Engineer',
            location: 'Austin, TX',
        });
        console.log('👥 Created demo users:');
        console.log('   📧 demo@alumni.com / password123 (Alumni)');
        console.log('   📧 admin@college.edu / admin123 (Admin)');
        console.log('   📧 student@college.edu / student123 (Student)');
        console.log('   📧 alice@alumni.com / password123 (Alumni)');
        console.log('   📧 bob@alumni.com / password123 (Alumni)');
        console.log('\n✅ Database seeded successfully!');
        console.log('\n🎯 You can now login with any of the above credentials');
        process.exit(0);
    }
    catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};
seedDatabase();
//# sourceMappingURL=seed.js.map