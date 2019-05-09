import { Request, Response } from "express";
import Genre, { IGenre } from "../models/genre";
import { BaseController } from "./base/base.contoller";

export class GenreController extends BaseController {
    constructor() {
        super();
    }

    public getAll(req: Request, res: Response) {
        Genre.find((err: any, genres: IGenre[]) => {
            this.Callback(res, err, genres);
        });
    }

    public getById(req: Request, res: Response) {
        Genre.findById(req.params.genreId, (err: any, genre: IGenre) => {
            this.Callback(res, err, genre);
        });
    }
}
