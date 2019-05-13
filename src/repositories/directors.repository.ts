import { Types } from "mongoose";
import Directors, { IDirector } from "../models/director";
import { ICallback } from "./base/callback";
import { IPagination } from "./base/pagination";

export class DirectorsRepository {
    public async getAll(callback?: ICallback<IDirector[]>): Promise<IDirector[]> {
        const directors = await Directors.find({}, null, { sort: { firstName: 1, lastName: 1 } }, callback);
        return directors;
    }

    public async getPage(take: number,
                         skip: number,
                         callback?: ICallback<IDirector[]>): Promise<IPagination<IDirector>> {
        const result = {} as IPagination<IDirector>;
        result.totalCount = await Directors.count({});
        result.totalPage = Math.ceil(result.totalCount / Math.max(take, 1));
        result.currentPage = Math.max(skip / take + 1, 1);
        result.items = await Directors
            .find({}, null, { sort: { firstName: 1, lastName: 1 } }, callback)
            .skip(skip)
            .limit(take);

        return result;
    }

    public async getById(id: Types.ObjectId, callback?: ICallback<IDirector>): Promise<IDirector> {
        const director = await Directors.findById(id, callback);
        return director;
    }
}
