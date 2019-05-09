import { Request, Response } from "express";
import Actor, { IActor } from "../models/actor";
import { BaseController } from "./base/base.contoller";

export class ActorController extends BaseController {
    constructor() {
        super();
    }

    public getAll(req: Request, res: Response) {
        Actor.find((err: any, actors: IActor[]) => {
            this.Callback(res, err, actors);
        });
    }

    public getById(req: Request, res: Response) {
        Actor.findById(req.params.actorId, (err: any, actor: IActor) => {
            this.Callback(res, err, actor);
        });
    }
}
