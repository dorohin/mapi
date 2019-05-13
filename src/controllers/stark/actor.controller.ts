import { Request, Response } from "express";
import { IActorDto } from "../../dtos/actor.dto";
import { IFilmDto } from "../../dtos/film.dto";
import { ActorsRepository } from "../../repositories/actors.repository";
import { BaseController } from "../base/base.contoller";

export class ActorController extends BaseController {
    private readonly actorsRepository: ActorsRepository = new ActorsRepository();

    constructor() {
        super();
    }

    public async getAll(request: Request, response: Response) {
        const actors = await this.actorsRepository.getAll();
        response.json(actors);
    }
}
