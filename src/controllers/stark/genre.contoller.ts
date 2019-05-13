import { Request, Response } from "express";
import { GenresRepository } from "../../repositories/genres.repository";
import { BaseController } from "../base/base.contoller";

export class GenreController extends BaseController {
    private readonly genresRepository: GenresRepository = new GenresRepository();

    constructor() {
        super();
    }

    public async getAll(request: Request, response: Response) {
        const genres = await this.genresRepository.getAll();
        response.json(genres);
    }

    public async getById(request: Request, response: Response) {
        const genre = await this.genresRepository.getById(request.params.genreId);
        response.json(genre);
    }
}
