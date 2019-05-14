import { Request, Response } from "express";
import { IFilmDto } from "../../dtos/film.dto";
import { FilmsRepository } from "../../repositories/films.repository";
import { BaseController } from "../base/base.contoller";

export class FilmController extends BaseController {
    private readonly filmsRepository: FilmsRepository = new FilmsRepository();

    constructor() {
        super();
    }

    public async getAll(request: Request, response: Response) {
        const films = await this.filmsRepository.getAll();
        response.json(films);
    }
}
