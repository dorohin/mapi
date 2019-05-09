import { Types } from "mongoose";

export interface IHuman {
    firstName: string;
    lastName: string;
    birthDate: Date;
    photoId: Types.ObjectId;
}
