import { Types } from "mongoose";
import { IFilmDto } from "./film.dto";

export interface IGenreDto {
    id: Types.ObjectId;
    title: string;
    films: IFilmDto[];
}
