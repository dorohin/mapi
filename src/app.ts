import * as bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

class App {
    //#region Private fields
    private app: express.Application;
    //#endregion

    //#region Properties
    public get App(): express.Application { return this.app; }
    //#endregion

    constructor() {
        // initialize configuration
        dotenv.config({path: "./environments/.env.development"});

        this.app = express();
        this.config();
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
