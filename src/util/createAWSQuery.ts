import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import APP_ENV from "../env";


export const createAWSQuery = (endpoint: string) => {
    return fetchBaseQuery({
        baseUrl: `${APP_ENV.API_AWS_URL}/${endpoint}`
    });
}
