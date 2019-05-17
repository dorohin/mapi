import { Types } from "mongoose";
import Actors from "../actor";
import Directors from "../director";
import Films, { IFilm } from "../film";
import Genres from "../genre";
import { BaseSeed } from "./base.seed";

export class FilmsSeed extends BaseSeed<IFilm> {

    constructor() {
        super(Films);
    }

    public async initFilms() {
        await this.init();

        const films: IFilm[] = [
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Downey Jr." },
                        { lastName: "Paltrow" },
                        { lastName: "Howard" }]
                })),
                // tslint:disable-next-line:max-line-length
                description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
                directors: await Directors.find({ $or: [{ lastName: "Favreau" }] }),
                duration: 126,
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2008, 4, 2),
                title: "Iron Man",
                trailerUri: "https://youtu.be/8hYlB38asDY",
                year: 2008,
            } as IFilm,
        ];

        films.forEach((film) => {
            film._id = new Types.ObjectId();
            film.createdAt = new Date();
            this.model.create(film);

            film.actors.forEach((a) => { a.films.push(film); a.save(); });
            film.genres.forEach((g) => { g.films.push(film); g.save(); });
            film.directors.forEach((d) => { d.films.push(film); d.save(); });
        });
    }
}
