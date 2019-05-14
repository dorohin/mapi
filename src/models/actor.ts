import { Document, model, Schema, Types } from "mongoose";
import { IHuman } from "./base/human.interface";

export interface IActor extends Document, IHuman {
    films: Types.ObjectId[];
}

export const ActorSchema = new Schema({
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

const Actors = model<IActor>("Actor", ActorSchema);
export default Actors;
