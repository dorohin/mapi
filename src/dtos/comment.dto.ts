import { Types } from "mongoose";

export interface ICommentDto {
    id: Types.ObjectId;
    text: string;
    crteatedAt: Date;
    // TODO:: Add user
}
