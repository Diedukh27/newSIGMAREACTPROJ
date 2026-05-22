import {createApi} from "@reduxjs/toolkit/query/react";
import {createAWSQuery} from "../util/createAWSQuery.ts";
import {serialize} from "object-to-formdata";
import type {IMovieCreate} from "../types/movies/IMovieCreate.ts";

export const apiMovies = createApi({
    reducerPath: 'moveis',
    baseQuery: createAWSQuery("api/movies"),
    endpoints: (builder) => ({
        createMovie: builder.mutation<void, IMovieCreate>({
            query: (body) =>
            {
                console.log("Submit Data Query", body);
                const form = serialize(body);

                return {
                    url: "",
                    method: "POST",
                    body: form
                }
            }
        }),
    })
});

export const {
    useCreateMovieMutation,
}  = apiMovies;