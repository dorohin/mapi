import { Document, model, Schema, Types } from "mongoose";

export enum FileType {
    FilmPoster = 1,
    FilmScreenshot = 2
}

export interface IFile extends Document {
    path: string;
    createdAt: Date;
    name: string;
    film: Types.ObjectId;
    type: FileType;
}

export const FileSchema = new Schema({
    createdAt: { type: Date, required: true },
    film: {
        ref: "Film",
        type: Schema.Types.ObjectId
    },
    name: { type: String, required: true },
    path: { type: String, required: true },
    type: { type: Number, required: true }
});

const Files = model<IFile>("File", FileSchema);
export default Files;
