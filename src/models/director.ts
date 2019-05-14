import { Document, model, Schema, Types } from "mongoose";
import { IHuman } from "./base/human.interface";

export interface IDirector extends Document, IHuman {
    films: Types.ObjectId[];
}

export const DirectorSchema = new Schema({
    birthDate: { type: Date, required: true },
    films: [{
        ref: "Film",
        type: Schema.Types.ObjectId
    }],
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photoId: {
        ref: "File",
        type: Schema.Types.ObjectId
    },
    title: { type: String, required: true }
});

const Directors = model<IDirector>("Director", DirectorSchema);
export default Directors;
