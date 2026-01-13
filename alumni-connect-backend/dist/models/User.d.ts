import mongoose, { type Document } from 'mongoose';
export interface IUser extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: 'super_admin' | 'college_admin' | 'alumni' | 'student';
    college?: mongoose.Types.ObjectId;
    graduationYear?: number;
    department?: string;
    profilePicture?: string;
    bio?: string;
    currentCompany?: string;
    currentPosition?: string;
    location?: string;
    skills?: string[];
    interests?: string[];
    socialLinks?: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}
declare const _default: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export default _default;
//# sourceMappingURL=User.d.ts.map