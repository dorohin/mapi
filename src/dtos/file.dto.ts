import { Types } from "mongoose";

export interface IFileDto {
    id: Types.ObjectId;
    path: string;
}
