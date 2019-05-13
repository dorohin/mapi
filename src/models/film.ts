import { Document, model, Schema } from "mongoose";

export interface IFilm extends Document {
    title: string;
    description?: string;
    year?: number;
    createdAt: Date;
    releaseDate?: Date;
    duration?: number;
    rate?: string;
    trailerUri?: string;
    genres: Schema.Types.ObjectId[];
    screenshots?: Schema.Types.ObjectId[];
    comments?: Schema.Types.ObjectId[];
}

export const FilmSchema = new Schema({
    comments: [{
        ref: "Comment",
        type: Schema.Types.ObjectId
    }],
    createdAt: { type: Date, required: true },
    description: { type: String, required: false },
    duration: { type: Number, required: false },
    genres: [{
        ref: "Genre",
        type: Schema.Types.ObjectId
    }],
    rate: { type: String, required: false },
    releaseDate: { type: Date, required: false },
    screenshots: [{
        ref: "File",
        type: Schema.Types.ObjectId
    }],
    title: { type: String, required: true },
    trailerUri: { type: String, required: false },
    year: { type: Number, required: false }
});

const schemaName = "Film";
const Films = model<IFilm>("Film", FilmSchema, schemaName);
export default Films;
