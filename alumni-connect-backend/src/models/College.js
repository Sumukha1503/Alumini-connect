import mongoose, { Document, Schema } from 'mongoose';
const collegeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    domain: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    logo: String,
    description: String,
    location: String,
    website: String,
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
export default mongoose.model('College', collegeSchema);
//# sourceMappingURL=College.js.map