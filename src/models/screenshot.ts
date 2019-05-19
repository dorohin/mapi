import { Document, model, Schema } from "mongoose";
import { IFile } from "./file";
import { IFilm } from "./film";

export interface IScreenshot extends Document {
    film: IFilm;
    file: IFile;
    order: number;
}

export const ScreenshotSchema = new Schema({
    file: {
        ref: "File",
        type: Schema.Types.ObjectId
    },
    film: {
        ref: "Film",
        type: Schema.Types.ObjectId
    },
    order: { type: Number, required: true }
});

const Screenshots = model<IScreenshot>("Screenshot", ScreenshotSchema);
export default Screenshots;
