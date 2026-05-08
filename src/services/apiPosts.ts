import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../util/createBaseQuery.ts";
import type {IPost} from "../types/IPost.ts";
import type {ICreatePost} from "../types/ICreatePost.ts";
// import type {IUser} from "../types/IUser.ts";

export const apiPosts = createApi({
    reducerPath: 'posts',
    baseQuery: createBaseQuery("posts"),
    endpoints: (builder) => ({
        // getUsers: builder.query<IUser[], void>({
        //     query: () => '',
        // }),
        createPost: builder.mutation<IPost, ICreatePost>({
            query: (body) => ({
                url: "",
                method: "POST",
                body
            })
        })
    })
});

export const {
    useCreatePostMutation
}  = apiPosts;