import { Document, model, Schema } from "mongoose";
import { IHuman } from "./base/human.interface";

export interface IUser extends Document, IHuman {
    comments: Schema.Types.ObjectId[];
}

export const UserSchema = new Schema({
    birthDate: { type: Date, required: true },
    comments: [{
        ref: "Comment",
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

const schemaName = "User";
const User = model<IUser>("User", UserSchema, schemaName);
export default User;
