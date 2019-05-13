import { Types } from "mongoose";
import { ICommentDto } from "./comment.dto";
import { IDirectorDto } from "./director.dto";
import { IFileDto } from "./file.dto";
import { IGenreDto } from "./genre.dto";

export interface IFilmDto {
    id: Types.ObjectId;
    title: string;
    description?: string;
    year?: number;
    createdAt: Date;
    releaseDate?: Date;
    duration?: number;
    rate?: string;
    trailerUri?: string;
    genres: IGenreDto[];
    screenshots: IFileDto[];
    comments: ICommentDto[];
    directors: IDirectorDto[];
}
