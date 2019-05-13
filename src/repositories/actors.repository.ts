import { Types } from "mongoose";
import Actors, { IActor } from "../models/actor";
import { ICallback } from "./base/callback";
import { IPagination } from "./base/pagination";

export class ActorsRepository {
    public async getAll(callback?: ICallback<IActor[]>): Promise<IActor[]> {
        const actors = await Actors.find({}, null, { sort: { firstName: 1, lastName: 1 } }, callback);
        return actors;
    }

    public async getPage(take: number, skip: number, callback?: ICallback<IActor[]>): Promise<IPagination<IActor>> {
        const result = {} as IPagination<IActor>;
        result.totalCount = await Actors.count({});
        result.totalPage = Math.ceil(result.totalCount / Math.max(take, 1));
        result.currentPage = Math.max(skip / take + 1, 1);
        result.items = await Actors
            .find({}, null, { sort: { firstName: 1, lastName: 1 } }, callback)
            .skip(skip)
            .limit(take);

        return result;
    }

    public async getById(id: Types.ObjectId, callback?: ICallback<IActor>): Promise<IActor> {
        const actor = await Actors.findById(id, callback);
        return actor;
    }
}
