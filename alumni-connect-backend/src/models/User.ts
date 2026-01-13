import mongoose, { type Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

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

const userSchema = new Schema<IUser>(
  {
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
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre('save', async function () {
  if (!this.isModified('password')) {
    return;
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', userSchema);
