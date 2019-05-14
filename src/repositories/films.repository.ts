import { Types } from "mongoose";
import Films, { IFilm } from "../models/film";
import { ICallback } from "./base/callback";
import { IPagination } from "./base/pagination";

export class FilmsRepository {
    public async getAll(callback?: ICallback<IFilm[]>): Promise<IFilm[]> {
        const films = await Films.find({}, null, { sort: { firstName: 1, lastName: 1 } }, callback)
                            .populate("genres", "title")
                            .populate("actors", "-films -birthDate");
        return films;
    }

    public async getPage(take: number, skip: number, callback?: ICallback<IFilm[]>): Promise<IPagination<IFilm>> {
        const result = {} as IPagination<IFilm>;
        result.totalCount = await Films.count({});
        result.totalPage = Math.ceil(result.totalCount / Math.max(take, 1));
        result.currentPage = Math.max(skip / take + 1, 1);
        result.items = await Films
            .find({}, null, { sort: { title: 1 } }, callback)
            .skip(skip)
            .limit(take);

        return result;
    }

    public async getById(id: Types.ObjectId, callback?: ICallback<IFilm>): Promise<IFilm> {
        const film = await Films.findById(id, callback);
        return film;
    }
}
