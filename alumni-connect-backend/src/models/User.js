import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['super_admin', 'college_admin', 'alumni', 'student'],
        default: 'alumni',
    },
    college: {
        type: Schema.Types.ObjectId,
        ref: 'College',
    },
    graduationYear: Number,
    department: String,
    profilePicture: String,
    bio: String,
    currentCompany: String,
    currentPosition: String,
    location: String,
    skills: [String],
    interests: [String],
    socialLinks: {
        linkedin: String,
        twitter: String,
        github: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};
export default mongoose.model('User', userSchema);
//# sourceMappingURL=User.js.map