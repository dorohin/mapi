import { Document, model, Schema } from "mongoose";

export interface IFile extends Document {
    path: string;
    createdAt: Date;
    name: string;
}

export const FileSchema = new Schema({
    createdAt: { type: Date, required: true },
    name: { type: String, required: true },
    path: { type: String, required: true }
});

const schemaName = "File";
const Files = model<IFile>("File", FileSchema, schemaName);
export default Files;
