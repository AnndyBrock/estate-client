import { defer } from "react-router-dom";
import requestAPI from "./request.js"

export const singlePageLoader = async ({request, params}) => {
    const res = await requestAPI("/listings/"+params.id);
    return res.data;
}

export const listPageLoader = async ({request, params}) => {
    const query = request.url.split("?")[1]
    const listings = requestAPI("/listings?" + query);
    return defer({
        postResponse: listings
    })
}
