import {configureStore} from "@reduxjs/toolkit";
import {apiUsers} from "../services/apiUsers.ts";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {apiPosts} from "../services/apiPosts.ts";
import {apiAccount} from "../services/apiAccount.ts";
import {apiGenres} from "../services/apiGenres.ts";
import {apiMovies} from "../services/apiMovies.ts";

export const store = configureStore({
    reducer: {
        [apiUsers.reducerPath]: apiUsers.reducer,
        [apiGenres.reducerPath]: apiGenres.reducer,
        [apiMovies.reducerPath]: apiMovies.reducer,
        [apiPosts.reducerPath]: apiPosts.reducer,
        [apiAccount.reducerPath]: apiAccount.reducer,
    },
    middleware:
        (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                apiUsers.middleware,
                apiPosts.middleware,
                apiAccount.middleware,
                apiGenres.middleware,
                apiMovies.middleware,
            )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector