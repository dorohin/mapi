import { Types } from "mongoose";
import Actors, { IActor } from "../actor";
import { BaseSeed } from "./base.seed";

export class ActorsSeed extends BaseSeed<IActor> {

    constructor() {
        super(Actors);
    }

    public async initActors() {
        await this.init();

        const actors: IActor[] = [
            {
                birthDate: new Date(1965, 3, 4),
                firstName: "Robert",
                lastName: "Downey Jr."
            } as IActor,
            {
                birthDate: new Date(1972, 8, 27),
                firstName: "Gwyneth",
                lastName: "Paltrow"
            } as IActor,
            {
                birthDate: new Date(1969, 2, 11),
                firstName: "Terrence",
                lastName: "Howard"
            } as IActor,
            {
                birthDate: new Date(1949, 11, 4),
                firstName: "Jeff",
                lastName: "Bridges"
            } as IActor,
            {
                birthDate: new Date(1969, 7, 18),
                firstName: "Edward",
                lastName: "Norton"
            } as IActor,
            {
                birthDate: new Date(1977, 6, 1),
                firstName: "Liv",
                lastName: "Tyler"
            } as IActor,
            {
                birthDate: new Date(1961, 4, 14),
                firstName: "Tim",
                lastName: "Roth"
            } as IActor,
            {
                birthDate: new Date(1950, 3, 20),
                firstName: "William",
                lastName: "Hurt"
            } as IActor,
            {
                birthDate: new Date(1965, 8, 16),
                firstName: "Mickey",
                lastName: "Rourke"
            } as IActor,
            {
                birthDate: new Date(1964, 10, 29),
                firstName: "Don",
                lastName: "Cheadle"
            } as IActor,
            {
                birthDate: new Date(1983, 7, 11),
                firstName: "Chris",
                lastName: "Hemsworth"
            } as IActor,
            {
                birthDate: new Date(1937, 11, 31),
                firstName: "Anthony",
                lastName: "Hopkins"
            } as IActor,
            {
                birthDate: new Date(1981, 5, 9),
                firstName: "Natalie",
                lastName: "Portman"
            } as IActor,
            {
                birthDate: new Date(1981, 1, 9),
                firstName: "Tom",
                lastName: "Hiddleston"
            } as IActor,
            {
                birthDate: new Date(1981, 5, 13),
                firstName: "Chris",
                lastName: "Evans"
            } as IActor,
            {
                birthDate: new Date(1960, 3, 4),
                firstName: "Hugo",
                lastName: "Weaving"
            } as IActor,
            {
                birthDate: new Date(1948, 11, 21),
                firstName: "Samuel",
                lastName: "L. Jackson"
            } as IActor,
            {
                birthDate: new Date(1982, 3, 5),
                firstName: "Hayley",
                lastName: "Atwell"
            } as IActor,
            {
                birthDate: new Date(1984, 10, 22),
                firstName: "Scarlett",
                lastName: "Johansson"
            } as IActor,
            {
                birthDate: new Date(1971, 0, 7),
                firstName: "Jeremy",
                lastName: "Renner"
            } as IActor,
            {
                birthDate: new Date(1967, 9, 5),
                firstName: "Guy",
                lastName: "Pearce"
            } as IActor,
            {
                birthDate: new Date(1951, 5, 13),
                firstName: "Stellan",
                lastName: "Skarsgård"
            } as IActor,
            {
                birthDate: new Date(1936, 7, 18),
                firstName: "Robert",
                lastName: "Redford"
            } as IActor,
            {
                birthDate: new Date(1979, 5, 21),
                firstName: "Chris",
                lastName: "Pratt"
            } as IActor,
            {
                birthDate: new Date(1967, 6, 18),
                firstName: "Vin",
                lastName: "Diesel"
            } as IActor,
            {
                birthDate: new Date(1975, 0, 5),
                firstName: "Bradley",
                lastName: "Cooper"
            } as IActor,
            {
                birthDate: new Date(1978, 5, 19),
                firstName: "Zoe",
                lastName: "Saldana"
            } as IActor,
            {
                birthDate: new Date(1967, 10, 22),
                firstName: "Mark",
                lastName: "Ruffalo"
            } as IActor,
            {
                birthDate: new Date(1969, 3, 6),
                firstName: "Paul",
                lastName: "Rudd"
            } as IActor,
            {
                birthDate: new Date(1944, 8, 25),
                firstName: "Michael",
                lastName: "Douglas"
            } as IActor,
            {
                birthDate: new Date(1976, 2, 14),
                firstName: "Corey",
                lastName: "Stoll"
            } as IActor,
            {
                birthDate: new Date(1979, 7, 3),
                firstName: "Evangeline",
                lastName: "Lilly"
            } as IActor,
            {
                birthDate: new Date(1982, 7, 13),
                firstName: "Sebastian",
                lastName: "Stan"
            } as IActor,
            {
                birthDate: new Date(1976, 6, 19),
                firstName: "Benedict",
                lastName: "Cumberbatch"
            } as IActor,
            {
                birthDate: new Date(1977, 6, 10),
                firstName: "Chiwetel",
                lastName: "Ejiofor"
            } as IActor,
            {
                birthDate: new Date(1978, 10, 17),
                firstName: "Rachel",
                lastName: "McAdams"
            } as IActor,
            {
                birthDate: new Date(1970, 6, 3),
                firstName: "Benedict",
                lastName: "Wong"
            } as IActor,
            {
                birthDate: new Date(1969, 0, 18),
                firstName: "Dave",
                lastName: "Bautista"
            } as IActor,
            {
                birthDate: new Date(1996, 5, 1),
                firstName: "Tom",
                lastName: "Holland"
            } as IActor,
            {
                birthDate: new Date(1951, 8, 5),
                firstName: "Michael",
                lastName: "Keaton"
            } as IActor,
            {
                birthDate: new Date(1964, 11, 4),
                firstName: "Marisa",
                lastName: "Tomei"
            } as IActor,
            {
                birthDate: new Date(1969, 4, 14),
                firstName: "Cate",
                lastName: "Blanchett"
            } as IActor,
            {
                birthDate: new Date(1977, 10, 29),
                firstName: "Chadwick",
                lastName: "Boseman"
            } as IActor,
            {
                birthDate: new Date(1987, 1, 9),
                firstName: "Michael",
                lastName: "B. Jordan"
            } as IActor,
            {
                birthDate: new Date(1978, 1, 14),
                firstName: "Danai",
                lastName: "Gurira"
            } as IActor,
            {
                birthDate: new Date(1976, 0, 13),
                firstName: "Michael",
                lastName: "Peña"
            } as IActor,
            {
                birthDate: new Date(1989, 9, 1),
                firstName: "Brie",
                lastName: "Larson"
            } as IActor,
            {
                birthDate: new Date(1969, 3, 3),
                firstName: "Ben",
                lastName: "Mendelsohn"
            } as IActor,
            {
                birthDate: new Date(1972, 11, 29),
                firstName: "Jude",
                lastName: "Law"
            } as IActor,
            {
                birthDate: new Date(1987, 10, 28),
                firstName: "Karen",
                lastName: "Gillan"
            } as IActor,
            {
                birthDate: new Date(1983, 9, 3),
                firstName: "Tessa",
                lastName: "Thompson"
            } as IActor,
            {
                birthDate: new Date(1989, 1, 16),
                firstName: "Elizabeth",
                lastName: "Olsen"
            } as IActor,
            {
                birthDate: new Date(1978, 8, 23),
                firstName: "Anthony",
                lastName: "Mackie"
            } as IActor,
            {
                birthDate: new Date(1986, 4, 3),
                firstName: "Pom",
                lastName: "Klementieff"
            } as IActor,
            {
                birthDate: new Date(1960, 8, 5),
                firstName: "Tilda",
                lastName: "Swinton"
            } as IActor,
            {
                birthDate: new Date(1968, 1, 12),
                firstName: "Josh",
                lastName: "Brolin"
            } as IActor,
            {
                birthDate: new Date(1980, 11, 18),
                firstName: "Jake",
                lastName: "Gyllenhaal"
            } as IActor
        ];

        actors.forEach((actor) => {
            actor._id = new Types.ObjectId();
            this.model.create(actor);
        });
    }
}
