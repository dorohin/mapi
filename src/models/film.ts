import { Document, model, Schema, Types } from "mongoose";
import { IActor } from "./actor";
import { IComment } from "./comment";
import { IDirector } from "./director";
import { IFile } from "./file";
import { IGenre } from "./genre";

export interface IFilm extends Document {
    title: string;
    description?: string;
    year?: number;
    createdAt: Date;
    releaseDate?: Date;
    duration?: number;
    rating?: string;
    trailerUri?: string;
    genres: IGenre[];
    screenshots?: IFile[];
    comments?: IComment[];
    directors?: IDirector[];
    actors?: IActor[];
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
    rating: { type: String, required: false },
    releaseDate: { type: Date, required: false },
    screenshots: [{
        ref: "File",
        type: Schema.Types.ObjectId
    }],
    title: { type: String, required: true },
    trailerUri: { type: String, required: false },
    year: { type: Number, required: false }
});

const Films = model<IFilm>("Film", FilmSchema);
export default Films;
