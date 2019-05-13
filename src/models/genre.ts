import { Document, model, Schema, Types } from "mongoose";

export interface IGenre extends Document {
    title: string;
    films: Types.ObjectId[];
}

export const GenreSchema = new Schema({
    films: [{
        ref: "Film",
        type: Schema.Types.ObjectId
    }],
    title: { type: String, required: true }
});

const schemaName = "Genre";
const Genres = model<IGenre>("Genre", GenreSchema, schemaName);
export default Genres;
