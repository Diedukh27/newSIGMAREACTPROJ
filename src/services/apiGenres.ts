import {createApi} from "@reduxjs/toolkit/query/react";
import {createAWSQuery} from "../util/createAWSQuery.ts";
import type {IPagedResult} from "../types/helpers/IPagedResult.ts";
import type {IGenreItem} from "../types/genres/IGenreItem.ts";
import type {IGenreSearch} from "../types/genres/IGenreSearch.ts";

export const apiGenres = createApi({
    reducerPath: 'genres',
    baseQuery: createAWSQuery("api/genres"),
    endpoints: (builder) => ({
        searchGenres: builder.query<IPagedResult<IGenreItem>, IGenreSearch>({
            query: (data) =>
            {
                // console.log("Submit Data Query", body);
                // const form = serialize(body);


                return {
                    url: "search",
                    method: "GET",
                    params: data
                }
            }
        }),
    })
});

export const {
    useSearchGenresQuery
}  = apiGenres;