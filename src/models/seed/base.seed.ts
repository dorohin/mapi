import { Document, Model } from "mongoose";

export class BaseSeed<TModel extends Document> {

    constructor(protected model: Model<TModel, {}>) {
    }

    protected async init(): Promise<void> {
        if (await this.CheckIfCollectionExists()) {
            await this.DropCollection();
        }
        await this.CreateCollection();
    }

    private async CheckIfCollectionExists(): Promise<boolean> {
        return (await this.model.db.db.listCollections({ name: this.model.collection.name })
            .toArray())
            .length > 0;
    }

    private async CreateCollection(): Promise<void> {
        await this.model.db.db.createCollection(this.model.collection.name);
    }

    private async DropCollection(): Promise<void> {
        await this.model.db.db.dropCollection(this.model.collection.name);
    }
}
