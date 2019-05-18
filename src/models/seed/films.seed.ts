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
                        { lastName: "Howard" },
                        { lastName: "Bridges" }
                    ]
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
                year: 2008
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Norton" },
                        { lastName: "Tyler" },
                        { lastName: "Roth" },
                        { lastName: "Hurt" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into, whenever he loses his temper",
                directors: await Directors.find({ $or: [{ lastName: "Leterrier" }] }),
                duration: 112,
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2008, 5, 13),
                title: "The Incredible Hulk",
                trailerUri: "https://youtu.be/dz6eBeW19Lg",
                year: 2008
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Downey Jr." },
                        { lastName: "Rourke" },
                        { lastName: "Paltrow" },
                        { lastName: "Cheadle" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
                directors: await Directors.find({ $or: [{ lastName: "Favreau" }] }),
                duration: 124,
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2010, 3, 30),
                title: "Iron Man 2",
                trailerUri: "https://youtu.be/wKtcmiifycU",
                year: 2010
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Hemsworth" },
                        { lastName: "Hopkins" },
                        { lastName: "Portman" },
                        { lastName: "Hiddleston" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "The powerful but arrogant god Thor (Chris Hemsworth) is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
                directors: await Directors.find({ $or: [{ lastName: "Branagh" }] }),
                duration: 115,
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Fantasy" }] }),
                rating: "12A",
                releaseDate: new Date(2011, 3, 27),
                title: "Thor",
                trailerUri: "https://youtu.be/JOddp-nlNvQ",
                year: 2011
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Evans" },
                        { lastName: "Weaving" },
                        { lastName: "L. Jackson" },
                        { lastName: "Atwell" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a \"Super-Soldier serum\". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
                directors: await Directors.find({ $or: [{ lastName: "Johnston" }] }),
                duration: 124,
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2011, 6, 29),
                title: "Captain America: The First Avenger",
                trailerUri: "https://youtu.be/s6V754RPnZc",
                year: 2011
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Evans" },
                        { lastName: "Downey Jr." },
                        { lastName: "Ruffalo" },
                        { lastName: "Hemsworth" },
                        { lastName: "Johansson" },
                        { lastName: "Renner" },
                        { lastName: "Hiddleston" },
                        { lastName: "Skarsgård" },
                        { lastName: "L. Jackson" },
                        { lastName: "Paltrow" },
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                directors: await Directors.find({ $or: [{ lastName: "Whedon" }] }),
                duration: 143,
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2012, 3, 26),
                title: "Avengers Assemble",
                trailerUri: "https://youtu.be/NPoHPNeU9fc",
                year: 2012
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Downey Jr." },
                        { lastName: "Cheadle" },
                        { lastName: "Pearce" },
                        { lastName: "Paltrow" },
                        { lastName: "Favreau" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
                directors: await Directors.find({ $or: [{ lastName: "Black" }] }),
                duration: 130,
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2013, 3, 25),
                title: "Iron Man 3",
                trailerUri: "https://youtu.be/2CzoSeClcw0",
                year: 2013
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Hemsworth" },
                        { lastName: "Portman" },
                        { lastName: "Hiddleston" },
                        { lastName: "Skarsgård" },
                        { lastName: "Hopkins" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "When Dr. Jane Foster (Natalie Portman) gets cursed with a powerful entity known as the Aether, Thor is heralded of the cosmic event known as the Convergence and the genocidal Dark Elves.",
                directors: await Directors.find({ $or: [{ lastName: "Taylor" }] }),
                duration: 112,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Fanatasy" }] }),
                rating: "12A",
                releaseDate: new Date(2013, 9, 30),
                title: "Thor: The Dark World",
                trailerUri: "https://youtu.be/-hwGggrQL2g",
                year: 2013
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Evans" },
                        { lastName: "L. Jackson" },
                        { lastName: "Johansson" },
                        { lastName: "Redford" },
                        { lastName: "Atwell" },
                        { lastName: "Stan" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
                directors: await Directors.find({ $or: [{ lastName: "Russo" }] }),
                duration: 136,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2014, 2, 26),
                title: "Captain America: The Winter Soldier",
                trailerUri: "https://youtu.be/NLWsK1ZFunA",
                year: 2014
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Pratt" },
                        { lastName: "Diesel" },
                        { lastName: "Cooper" },
                        { lastName: "Saldana" },
                        { lastName: "Gillan" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
                directors: await Directors.find({ $or: [{ lastName: "Gunn" }] }),
                duration: 121,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Comedy" }] }),
                rating: "12A",
                releaseDate: new Date(2014, 6, 31),
                title: "Guardians of the Galaxy",
                trailerUri: "https://youtu.be/d96cjJhvlMA",
                year: 2014
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Downey Jr." },
                        { lastName: "Hemsworth" },
                        { lastName: "Ruffalo" },
                        { lastName: "Evans" },
                        { lastName: "Johansson" },
                        { lastName: "Renner" },
                        { lastName: "L. Jackson" },
                        { lastName: "Cheadle" },
                        { lastName: "Olsen" },
                        { lastName: "Atwell" },
                        { lastName: "Skarsgård" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan",
                directors: await Directors.find({ $or: [{ lastName: "Whedon" }] }),
                duration: 141,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2015, 3, 23),
                title: "Avengers: Age of Ultron",
                trailerUri: "https://youtu.be/tmeOjFno6Do",
                year: 2015
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Rudd" },
                        { lastName: "Douglas" },
                        { lastName: "Stoll" },
                        { lastName: "Lilly" },
                        { lastName: "Mackie" },
                        { lastName: "Peña" },
                        { lastName: "Atwell" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
                directors: await Directors.find({ $or: [{ lastName: "Reed" }] }),
                duration: 117,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Comedy" }] }),
                rating: "12A",
                releaseDate: new Date(2015, 6, 17),
                title: "Ant-Man",
                trailerUri: "https://youtu.be/pWdKf3MneyI",
                year: 2015
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Downey Jr." },
                        { lastName: "Boseman" },
                        { lastName: "Mackie" },
                        { lastName: "Evans" },
                        { lastName: "Johansson" },
                        { lastName: "Renner" },
                        { lastName: "Holland" },
                        { lastName: "Cheadle" },
                        { lastName: "Olsen" },
                        { lastName: "Rudd" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
                directors: await Directors.find({ $or: [{ lastName: "Russo" }] }),
                duration: 147,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2016, 3, 29),
                title: "Captain America: Civil War",
                trailerUri: "https://youtu.be/xnv__ogkt0M",
                year: 2016
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Cumberbatch" },
                        { lastName: "Ejiofor" },
                        { lastName: "Wong" },
                        { lastName: "Swinton" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
                directors: await Directors.find({ $or: [{ lastName: "Derrickson " }] }),
                duration: 115,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Fanatsy" }] }),
                rating: "12A",
                releaseDate: new Date(2016, 9, 25),
                title: "Doctor Strange",
                trailerUri: "https://youtu.be/MWRUNTLisPo",
                year: 2016
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Pratt" },
                        { lastName: "Saldana" },
                        { lastName: "Bautista" },
                        { lastName: "Diesel" },
                        { lastName: "Cooper" },
                        { lastName: "Gillan" },
                        { lastName: "Klementieff" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
                directors: await Directors.find({ $or: [{ lastName: "Gunn" }] }),
                duration: 136,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Comedy" }] }),
                rating: "12A",
                releaseDate: new Date(2017, 3, 28),
                title: "Guardians of the Galaxy: Vol. 2",
                trailerUri: "https://youtu.be/2cv2ueYnKjg",
                year: 2017
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Holland" },
                        { lastName: "Keaton" },
                        { lastName: "Downey Jr." },
                        { lastName: "Favreau" },
                        { lastName: "Paltrow" },
                        { lastName: "Tomei" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
                directors: await Directors.find({ $or: [{ lastName: "Watts" }] }),
                duration: 133,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2017, 6, 5),
                title: "Spider-Man: Homecoming",
                trailerUri: "https://youtu.be/U0D3AOldjMU",
                year: 2017
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Hemsworth" },
                        { lastName: "Hiddleston" },
                        { lastName: "Blanchett" },
                        { lastName: "Thompson" },
                        { lastName: "Ruffalo" },
                        { lastName: "Hopkins" },
                        { lastName: "Cumberbatch" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "Thor (Chris Hemsworth) is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela (Cate Blanchett).",
                directors: await Directors.find({ $or: [{ lastName: "Waititi" }] }),
                duration: 130,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Comedy" }] }),
                rating: "12A",
                releaseDate: new Date(2017, 9, 24),
                title: "Thor: Ragnarok",
                trailerUri: "https://youtu.be/ue80QwXMRHg",
                year: 2017
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Boseman" },
                        { lastName: "B. Jordan" },
                        { lastName: "Wright" },
                        { lastName: "Gurira" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
                directors: await Directors.find({ $or: [{ lastName: "Coogler" }] }),
                duration: 134,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2018, 1, 13),
                title: "Black Panther",
                trailerUri: "https://youtu.be/xjDjIWPwcPU",
                year: 2018
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Evans" },
                        { lastName: "Downey Jr." },
                        { lastName: "Ruffalo" },
                        { lastName: "Hemsworth" },
                        { lastName: "Johansson" },
                        { lastName: "Renner" },
                        { lastName: "Hiddleston" },
                        { lastName: "Mackie" },
                        { lastName: "Stan" },
                        { lastName: "Paltrow" },
                        { lastName: "Cheadle" },
                        { lastName: "Cumberbatch" },
                        { lastName: "Holland" },
                        { lastName: "Boseman" },
                        { lastName: "Saldana" },
                        { lastName: "Gillan" },
                        { lastName: "Klementieff" },
                        { lastName: "Bautista" },
                        { lastName: "Diesel" },
                        { lastName: "Cooper" },
                        { lastName: "Brolin" },
                        { lastName: "Pratt" },
                        { lastName: "Wright" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
                directors: await Directors.find({ $or: [{ lastName: "Russo" }] }),
                duration: 149,
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2018, 3, 26),
                title: "Avengers: Infinity War",
                trailerUri: "https://youtu.be/6ZfuNTqbHE8",
                year: 2018
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Rudd" },
                        { lastName: "Douglas" },
                        { lastName: "Goggins" },
                        { lastName: "Lilly" },
                        { lastName: "Peña" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
                directors: await Directors.find({ $or: [{ lastName: "Reed" }] }),
                duration: 118,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Comedy" }] }),
                rating: "12A",
                releaseDate: new Date(2018, 7, 2),
                title: "Ant-Man and the Wasp",
                trailerUri: "https://youtu.be/2nVC5idq1UU",
                year: 2018
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Larson" },
                        { lastName: "L. Jackson" },
                        { lastName: "Mendelsohn" },
                        { lastName: "Law" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
                directors: await Directors.find({ $or: [{ lastName: "Boden" }, { lastName: "Fleck" }] }),
                duration: 123,
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2018, 2, 8),
                title: "Captain Marvel",
                trailerUri: "https://youtu.be/Z1BCujX3pw8",
                year: 2018
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Evans" },
                        { lastName: "Downey Jr." },
                        { lastName: "Ruffalo" },
                        { lastName: "Hemsworth" },
                        { lastName: "Johansson" },
                        { lastName: "Renner" },
                        { lastName: "Hiddleston" },
                        { lastName: "Mackie" },
                        { lastName: "Stan" },
                        { lastName: "Paltrow" },
                        { lastName: "Cheadle" },
                        { lastName: "Cumberbatch" },
                        { lastName: "Holland" },
                        { lastName: "Boseman" },
                        { lastName: "Saldana" },
                        { lastName: "Gillan" },
                        { lastName: "Klementieff" },
                        { lastName: "Bautista" },
                        { lastName: "Diesel" },
                        { lastName: "Cooper" },
                        { lastName: "Brolin" },
                        { lastName: "Pratt" },
                        { lastName: "Wright" },
                        { lastName: "Favreau" },
                        { lastName: "Atwell" },
                        { lastName: "Portman" },
                        { lastName: "Tomei" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
                directors: await Directors.find({ $or: [{ lastName: "Russo" }] }),
                duration: 181,
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Sci-Fi" }] }),
                rating: "12A",
                releaseDate: new Date(2019, 3, 25),
                title: "Avengers: Endgame",
                trailerUri: "https://youtu.be/TcMBFSGVi1c",
                year: 2019
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Holland" },
                        { lastName: "L. Jackson" },
                        { lastName: "Favreau" },
                        { lastName: "Paltrow" },
                        { lastName: "Tomei" },
                        { lastName: "Gyllenhaal" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
                directors: await Directors.find({ $or: [{ lastName: "Watts" }] }),
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Comedy" }] }),
                rating: "12A",
                releaseDate: new Date(2019, 6, 2),
                title: "Spider-Man: Far from Home",
                trailerUri: "https://youtu.be/Nt9L1jCKGnE",
                year: 2019
            } as IFilm,
            {
                actors: (await Actors.find({
                    $or: [
                        { lastName: "Klementieff" },
                        { lastName: "Pratt" },
                        { lastName: "Bautista" }
                    ]
                })),
                // tslint:disable-next-line:max-line-length
                description: "Plot unknown. Third installment of the 'Guardians of the Galaxy' franchise.",
                directors: await Directors.find({ $or: [{ lastName: "Gunn" }] }),
                // tslint:disable-next-line:max-line-length
                genres: await Genres.find({ $or: [{ title: "Action" }, { title: "Adventure" }, { title: "Comedy" }] }),
                title: "Guardians of the Galaxy Vol. 3",
                year: 2021
            } as IFilm
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
