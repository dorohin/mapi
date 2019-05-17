import { Document, model, Schema, Types } from "mongoose";
import { IFilm } from "./film";

export interface IGenre extends Document {
    title: string;
    films: IFilm[];
}

export const GenreSchema = new Schema({
    films: [{
        ref: "Film",
        type: Schema.Types.ObjectId
    }],
    title: { type: String, required: true }
});

const Genres = model<IGenre>("Genre", GenreSchema);
export default Genres;
