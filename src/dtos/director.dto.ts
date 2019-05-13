import { Types } from "mongoose";
import { IFileDto } from "./file.dto";
import { IFilmDto } from "./film.dto";

export interface IDirectorDto {
    id: Types.ObjectId;
    firstName: string;
    lastName: string;
    birthDate: Date;
    photo: IFileDto;
    films: IFilmDto[];
}
