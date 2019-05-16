import { Types } from "mongoose";
import Genres, { IGenre } from "../genre";
import { BaseSeed } from "./base.seed";

export class GenresSeed extends BaseSeed<IGenre> {

    constructor() {
        super(Genres);
    }

    public async initGenres() {
        await this.init();

        const titles = [ "Action", "Adventure", "Sci-Fi", "Fantasy", "Comedy" ];
        titles.forEach((title) => {
            this.model.create({
                _id: new Types.ObjectId(),
                title
            } as IGenre);
        });
    }
}
