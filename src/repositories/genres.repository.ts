import { Types } from "mongoose";
import Genres, { IGenre } from "../models/genre";
import { ICallback } from "./base/callback";
import { IPagination } from "./base/pagination";

export class GenresRepository {
    public async getAll(callback?: ICallback<IGenre[]>): Promise<IGenre[]> {
        const genres = await Genres.find(callback);
        return genres;
    }

    public async getPage(take: number, skip: number, callback?: ICallback<IGenre[]>): Promise<IPagination<IGenre>> {
        const result = {} as IPagination<IGenre>;
        result.totalCount = await Genres.count({});
        result.totalPage = Math.ceil(result.totalCount / Math.max(take, 1));
        result.currentPage = Math.max(skip / take + 1, 1);
        result.items = await Genres.find(callback).skip(skip).limit(take);

        return result;
    }

    public async getById(id: Types.ObjectId, callback?: ICallback<IGenre>): Promise<IGenre> {
        const genre = await Genres.findById(id, callback);
        return genre;
    }
}
