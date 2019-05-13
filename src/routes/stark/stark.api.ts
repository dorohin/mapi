import { Application, Request, Response } from "express";
import { ActorController } from "../../controllers/stark/actor.controller";
import { GenreController } from "../../controllers/stark/genre.contoller";
import { MongoDbContext } from "../../models/mongodb-context";

export class StarkApi {

    private readonly apiVersionName: string = "stark";

    constructor(private app: Application, private context: MongoDbContext) {

    }

    public register(baseUri: string): void {
        const apiPrefix = `${baseUri}/${this.apiVersionName}`;

        this.registerActorRoutes(apiPrefix);
        this.registerGenreRoutes(apiPrefix);
    }

    private registerActorRoutes(prefix: string) {
        const actorController = new ActorController();

        this.app.get(`${prefix}/actors`,
            async (req: Request, resp: Response) => await actorController.getAll(req, resp));
    }

    private registerGenreRoutes(prefix: string) {
        const genreController = new GenreController();

        this.app.get(`${prefix}/genres`,
            async (req: Request, resp: Response) => await genreController.getAll(req, resp));
        this.app.get(`${prefix}/genres/:genreId`,
            async (req: Request, resp: Response) => await genreController.getById(req, resp));
    }
}
