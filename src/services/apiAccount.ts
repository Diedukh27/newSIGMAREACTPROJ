import {createApi} from "@reduxjs/toolkit/query/react";
import {createAWSQuery} from "../util/createAWSQuery.ts";
import type {IRegister} from "../types/account/IRegister.ts";
import type {IRegisterResponse} from "../types/account/IRegisterResponse.ts";
import {serialize} from "object-to-formdata";
import type {ILogin} from "../types/account/ILogin.ts";

export const apiAccount = createApi({
    reducerPath: 'account',
    baseQuery: createAWSQuery("api/account"),
    endpoints: (builder) => ({
        register: builder.mutation<IRegisterResponse, IRegister>({
            query: (data) =>
            {
                console.log("Submit Data Query", data);
                const form = serialize(data);
                console.log("is form DATA", form instanceof FormData); // має бути true

                return {
                    url: "register",
                    method: "POST",
                    body: form
                }
            }
        }),
        login: builder.mutation<IRegisterResponse, ILogin>({
            query: (data) =>
            {
                return {
                    url: "login",
                    method: "POST",
                    body: data
                }
            }
        })
    })
});

export const {
    useRegisterMutation,
    useLoginMutation,
}  = apiAccount;