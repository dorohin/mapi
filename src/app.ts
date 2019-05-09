import * as bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import { MongoDbContext } from "./models/mongodb-context";
import { Routes } from "./routes/routes";

class App {
    //#region Private fields
    private app: express.Application;
    private routes: Routes;
    private db: MongoDbContext;
    //#endregion

    //#region Properties
    public get App(): express.Application { return this.app; }
    //#endregion

    constructor() {
        // initialize configuration
        dotenv.config({ path: "./environments/.env.development" });

        this.app = express();
        this.config();

        this.db = new MongoDbContext();
        this.routes = new Routes(this.app, this.db);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

const instance = new App();
export default instance.App;
