import { Document, model, Schema } from "mongoose";

export interface IGenre extends Document {
    title: string;
    films: Schema.Types.ObjectId[];
}

export const GenreSchema = new Schema({
    films: [{
        ref: "Film",
        type: Schema.Types.ObjectId
    }],
    title: { type: String, required: true }
});

const schemaName = "Genre";
const Genre = model<IGenre>("Genre", GenreSchema, schemaName);
export default Genre;
