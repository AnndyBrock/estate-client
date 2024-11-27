import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profile.scss";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useEffect } from "react";

function ProfilePage() {
    const dataPromise = useLoaderData();

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
                            resolve={dataPromise}
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
                            resolve={dataPromise}
                            errorElement={<p>Error loading saved listings!</p>}
                        >
                            {(data) => <List posts={data.savedListings} />}
                        </Await>
                    </Suspense>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
