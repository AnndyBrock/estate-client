import { defer, redirect } from "react-router-dom";

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

export const myListingLoader = async () => {
    try {
        const listings = await requestAPI("/users/my/listings");
        const chats = await requestAPI("/chats");
        return defer({
            listingsResponse: listings.data,
            chatResponse: chats.data,
        });
    } catch (e) {
        if (e.response && e.response.status === 401) {
            return redirect("/login");
        }
        throw e;
    }
};
