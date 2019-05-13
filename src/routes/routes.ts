import { Application, Request, Response } from "express";
import { MongoDbContext } from "../models/mongodb-context";
import { StarkApi } from "./stark/stark.api";

export class Routes {
    private readonly baseUri: string = "/api";

    constructor(private app: Application, private context: MongoDbContext) {
        this.initRoutes();
    }

    private initRoutes() {
        this.app.get("/", (req: Request, res: Response) => {
            res.status(200).send({
                message: "GET request successfulll!!!!"
            });
        });

        const stark = new StarkApi(this.app, this.context);
        stark.register(this.baseUri);
    }

}
