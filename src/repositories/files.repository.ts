import { Types } from "mongoose";
import Files, { IFile } from "../models/file";
import { ICallback } from "./base/callback";

export class FilesRepository {
    public async getByFilmId(id: Types.ObjectId, callback?: ICallback<IFile[]>): Promise<IFile[]> {
        const files = await Files.find({ film: id }, callback);
        return files;
    }

    public async getById(id: Types.ObjectId, callback?: ICallback<IFile>): Promise<IFile> {
        const file = await Files.findById(id, callback);
        return file;
    }

    public async create(path: string,
                        name: string,
                        callback?: ICallback<IFile>): Promise<IFile> {
        let file = {} as IFile;
        file.path = path;
        file.name = name;
        file.createdAt = new Date();

        file = await file.save(callback);
        return file;
    }

    public async delete(id: Types.ObjectId, callback?: ICallback<IFile>): Promise<boolean> {
        try {
            await Files.findByIdAndDelete(id, callback);
            return true;
        } catch {
            return false;
        }
    }
}
