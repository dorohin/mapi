export interface IPagination<TModel> {
    items: TModel[];
    totalCount: number;
    currentPage: number;
    totalPage: number;
}
