import { Types } from "mongoose";
import Directors, { IDirector } from "../director";
import { BaseSeed } from "./base.seed";

export class DirectorsSeed extends BaseSeed<IDirector> {

    constructor() {
        super(Directors);
    }

    public async initDirectors() {
        await this.init();

        const directors: IDirector[] = [
            {
                birthDate: new Date(1966, 9, 19),
                firstName: "Jon",
                lastName: "Favreau"
            } as IDirector,
            {
                birthDate: new Date(1973, 5, 17),
                firstName: "Louis",
                lastName: "Leterrier"
            } as IDirector,
            {
                birthDate: new Date(1960, 11, 10),
                firstName: "Kenneth",
                lastName: "Branagh"
            } as IDirector,
            {
                birthDate: new Date(1950, 4, 13),
                firstName: "Joe",
                lastName: "Johnston"
            } as IDirector,
            {
                birthDate: new Date(1964, 5, 23),
                firstName: "Joss",
                lastName: "Whedon"
            } as IDirector,
            {
                birthDate: new Date(1961, 11, 16),
                firstName: "Shane",
                lastName: "Black"
            } as IDirector,
            {
                birthDate: new Date(1965, 0, 1),
                firstName: "Alan",
                lastName: "Taylor"
            } as IDirector,
            {
                birthDate: new Date(1970, 1, 3),
                firstName: "Anthony",
                lastName: "Russo"
            } as IDirector,
            {
                birthDate: new Date(1971, 6, 8),
                firstName: "Joe",
                lastName: "Russo"
            } as IDirector,
            {
                birthDate: new Date(1966, 7, 5),
                firstName: "James",
                lastName: "Gunn"
            } as IDirector,
            {
                birthDate: new Date(1964, 6, 3),
                firstName: "Peyton",
                lastName: "Reed"
            } as IDirector,
            {
                birthDate: new Date(1966, 6, 16),
                firstName: "Scott",
                lastName: "Derrickson"
            } as IDirector,
            {
                birthDate: new Date(1981, 5, 28),
                firstName: "Jon",
                lastName: "Watts"
            } as IDirector,
            {
                birthDate: new Date(1975, 7, 16),
                firstName: "Taika",
                lastName: "Waititi"
            } as IDirector,
            {
                birthDate: new Date(1986, 4, 23),
                firstName: "Ryan",
                lastName: "Coogler"
            } as IDirector,
            {
                birthDate: new Date(1976, 8, 20),
                firstName: "Anna",
                lastName: "Boden"
            } as IDirector,
            {
                birthDate: new Date(1976, 8, 20),
                firstName: "Ryan",
                lastName: "Fleck"
            } as IDirector
        ];

        directors.forEach((director) => {
            director._id = new Types.ObjectId();
            this.model.create(director);
        });
    }
}
