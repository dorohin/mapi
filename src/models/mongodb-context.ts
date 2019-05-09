import { MongoError } from "mongodb";
import { connect, connection, Connection, disconnect } from "mongoose";

export class MongoDbContext {
    private db: Connection;

    public get Connection(): Connection { return this.db; }

    constructor() {
        this.init();
    }

    public close() {
        disconnect();
    }

    private init() {
        connect(`${process.env.MONGO_CONNECTION_STRING}`, { useNewUrlParser: true }, this.callback);
        this.db = connection;

        // tslint:disable-next-line:no-console
        this.db.on("error", console.error.bind(console, "Connection error: "));
        this.db.once("open", () => {
            // tslint:disable-next-line:no-console
            console.log("Connected!");
        });
    }

    private callback(error: MongoError) {
        if (error != null) {
            throw new Error(`Code: ${error.code}; Text: ${error.errmsg}`);
        }
    }
}
