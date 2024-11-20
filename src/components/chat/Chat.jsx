import React, {useState} from 'react';
import {userData} from "../../lib/dummydata.js"

import "./chat.scss"

const Chat = () => {
    const [chat, setChat] = useState(true)


    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src={userData.img} alt=""/>
                    <span>John Snow</span>
                    <p>Latest message...</p>
                </div>
                <div className="message">
                    <img src={userData.img} alt=""/>
                    <span>John Snow</span>
                    <p>Latest message...</p>
                </div>
                <div className="message">
                    <img src={userData.img} alt=""/>
                    <span>John Snow</span>
                    <p>Latest message...</p>
                </div>
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src={userData.img} alt=""/>
                        <span>John Snow</span>
                    </div>
                    <span className="close" onClick={() => setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Hello user</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Hello user</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Hello user</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Hello user</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Hello user</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Hello user</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Hello user</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Hello user</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    );
};

export default Chat;
