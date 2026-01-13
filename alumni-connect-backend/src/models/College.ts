import mongoose, { type Document, Schema } from 'mongoose';

export interface ICollege extends Document {
  name: string;
  domain: string;
  logo?: string;
  description?: string;
  location?: string;
  website?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const collegeSchema = new Schema<ICollege>(
  {
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICollege>('College', collegeSchema);
