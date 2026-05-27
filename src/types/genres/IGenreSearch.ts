import type {IBaseSearch} from "../helpers/IBaseSearch.ts";

export interface IGenreSearch extends  IBaseSearch {
    id?: number;
    slug?: string;
    name?: string;
    image?: string;
}