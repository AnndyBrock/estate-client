import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profile.scss";
import { Await, Link, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ProfilePage() {
    const { listingsResponse, chatResponse } = useLoaderData();

    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>My List</h1>
                        <Link to="/add">
                            <button>Create New Post</button>
                        </Link>
                    </div>

                    <Suspense fallback={<p>Loading your listings...</p>}>
                        <Await
                            resolve={listingsResponse}
                            errorElement={<p>Error loading your listings!</p>}
                        >
                            {(data) => <List posts={data.userListings} />}
                        </Await>
                    </Suspense>

                    <div className="title">
                        <h1>Saved List</h1>
                    </div>

                    <Suspense fallback={<p>Loading saved listings...</p>}>
                        <Await
                            resolve={listingsResponse}
                            errorElement={<p>Error loading saved listings!</p>}
                        >
                            {(data) => <List posts={data.savedListings} />}
                        </Await>
                    </Suspense>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Suspense fallback={<p>Loading chats...</p>}>
                        <Await
                            resolve={chatResponse}
                            errorElement={<p>Error loading chats!</p>}
                        >
                            {(data) => <Chat chats={data} />}
                        </Await>
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
