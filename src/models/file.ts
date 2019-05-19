import { Document, model, Schema, Types } from "mongoose";

export interface IFile extends Document {
    extension: string;
    thumb: string;
    path: string;
    createdAt: Date;
    name: string;
}

export const FileSchema = new Schema({
    createdAt: { type: Date, required: true },
    extension: { type: String, required: true },
    name: { type: String, required: true },
    path: { type: String, required: true },
    thumb: { type: String, required: true }
});

const Files = model<IFile>("File", FileSchema);
export default Files;
