import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profile.scss";
import { useNavigate } from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../../context/UserContext.jsx";

function ProfilePage() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
            <span>
              Avatar:
              <img
                  src={user?.avatar || "/noavatar.jpg"}
                  alt=""
              />
            </span>
                        <span>
              Username: <b>{`${user?.firstName || ''} ${user?.lastName || ''}`.trim()}</b>
            </span>
                        <span>
              E-mail: <b>{user?.email}</b>
            </span>
            { user?.phone ? (
            <span>
              Phone: <b>{user?.phone}</b>
            </span> ) : (
                <></>
            )}

            </div>
                <div className="title">
                <h1>My List</h1>
                <button>Create New Post</button>
            </div>
            <List />
                <div className="title">
                    <h1>Saved List</h1>
                </div>
            <List />
            </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
