import { Response } from "express";

export class BaseController {
    protected Callback<TModel>(response: Response, error: any, result: TModel) {
        if (error) {
            this.errorHandler(error);
            return;
        }

        response.json(result);
    }

    private errorHandler(error: any): void {
        if (error == null) {
            // tslint:disable-next-line:no-console
            console.error("Something whent wrong...");
        } else {
            // tslint:disable-next-line:no-console
            console.error(error);
        }
    }
}
