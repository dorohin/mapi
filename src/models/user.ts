import { Document, model, Schema, Types } from "mongoose";
import { IHuman } from "./base/human.interface";

export interface IUser extends Document, IHuman {
    comments: Types.ObjectId[];
    refreshToken?: string;
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
    refreshToken: { type: String, required: false },
    title: { type: String, required: true },

});

const schemaName = "User";
const Users = model<IUser>("User", UserSchema, schemaName);
export default Users;
