import * as fs from "fs";
import { Types } from "mongoose";
import * as path from "path";
import Files, { IFile } from "../file";
import { BaseSeed } from "./base.seed";

export class FilesSeed extends BaseSeed<IFile> {

    constructor() {
        super(Files);
    }

    public async initFiles() {
        await this.init();

        fs.readdir("./images/original/", (err, files) => {
            files.forEach((f) => {
                Files.create({
                    _id: new Types.ObjectId(),
                    createdAt: new Date(),
                    extension: path.extname(f),
                    name: path.parse(f).name,
                    path: "images/original/",
                    thumb: "images/thumb/",
                } as IFile);
            });
        });
    }
}
