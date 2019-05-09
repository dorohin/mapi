import { Document, model, Schema } from "mongoose";

export interface IComment extends Document {
    user: Schema.Types.ObjectId;
    film: Schema.Types.ObjectId;
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

const schemaName = "Comment";
const Comment = model<IComment>("Comment", CommentSchema, schemaName);
export default Comment;
