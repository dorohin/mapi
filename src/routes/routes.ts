import { Application, Request, Response } from "express";
import { ActorController } from "../controllers/actor.controller";
import { GenreController } from "../controllers/genre.contoller";
import { MongoDbContext } from "../models/mongodb-context";

export class Routes {
    //region Private fields
    private readonly actorController = new ActorController();
    private readonly genreController = new GenreController();
    //#endregion

    constructor(private app: Application, private context: MongoDbContext) {
        this.initRoutes();
        this.initActorRoutes();
        this.initGenreRoutes();
    }

    private initRoutes() {
        this.app.get("/", (req: Request, res: Response) => {
            res.status(200).send({
                message: "GET request successfulll!!!!"
            });
        });
    }

    private initActorRoutes() {
        this.app.get("/actors", (req: Request, resp: Response) => this.actorController.getAll(req, resp));
        this.app.get("/actors/:actorId", (req: Request, resp: Response) => this.actorController.getById(req, resp));
    }

    private initGenreRoutes() {
        this.app.get("/genres", (req: Request, resp: Response) => this.genreController.getAll(req, resp));
        this.app.get("/genres/:genreId", (req: Request, resp: Response) => this.genreController.getById(req, resp));
    }
}
