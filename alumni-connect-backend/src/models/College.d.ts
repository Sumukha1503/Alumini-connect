import mongoose, { Document } from 'mongoose';
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
declare const _default: mongoose.Model<ICollege, {}, {}, {}, mongoose.Document<unknown, {}, ICollege, {}, mongoose.DefaultSchemaOptions> & ICollege & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ICollege>;
export default _default;
//# sourceMappingURL=College.d.ts.map