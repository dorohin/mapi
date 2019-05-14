import { Document, model, Schema, Types } from "mongoose";

export interface IComment extends Document {
    user: Types.ObjectId;
    film: Types.ObjectId;
    text: string;
    crteatedAt: Date;
}

export const CommentSchema = new Schema({
    createdAt: { type: Date, required: true },
    film: {
        ref: "Film",
        type: Schema.Types.ObjectId
    },
    title: { type: String, required: true },
    user: {
        ref: "User",
        type: Schema.Types.ObjectId
    }
});

const Comments = model<IComment>("Comment", CommentSchema);
export default Comments;
