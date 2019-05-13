import { Document, model, Schema, Types } from "mongoose";

export interface IFilm extends Document {
    title: string;
    description?: string;
    year?: number;
    createdAt: Date;
    releaseDate?: Date;
    duration?: number;
    rate?: string;
    trailerUri?: string;
    genres: Types.ObjectId[];
    screenshots?: Types.ObjectId[];
    comments?: Types.ObjectId[];
    directors?: Types.ObjectId[];
    actors?: Types.ObjectId[];
}

export const FilmSchema = new Schema({
    actors: [{
        ref: "Actor",
        type: Schema.Types.ObjectId
    }],
    comments: [{
        ref: "Comment",
        type: Schema.Types.ObjectId
    }],
    createdAt: { type: Date, required: true },
    description: { type: String, required: false },
    directors: [{
        ref: "Director",
        type: Schema.Types.ObjectId
    }],
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
