import React, {useContext, useState} from 'react';
import './navbar.scss'
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../../lib/dummydata";
import { UserContext } from '../../context/UserContext.jsx';
import request from "../../lib/request.js";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(null);
    const { user, setUser } = useContext(UserContext);


    const navigate = useNavigate();

    const [notification, setNotification] = useState(0)

    const handleLogout = async () => {
        try {
            const res = await request.post('/auth/logout');

            if (res.status === 200) {
                setUser(null)
                localStorage.removeItem('user');
                navigate('/');
            }
        } catch (e) {
            setError(e.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" />
                    <span>Canada Estate</span>
                </a>
                <a href="/home">Home</a>
                <a href="/home">About</a>
                <a href="/home">Contact</a>
                <a href="/home">Agents</a>
            </div>
            <div className="right">
                {
                    user ? (
                        <div className="user">
                            <img src={user.avatar || "/noavatar.jpg"} alt=""/>
                            <span>{`${user.firstName || ''} ${user.lastName || ''}`.trim()}</span>
                            <Link className="profile" to="/profile">
                                { notification ?
                                    (<div className="notification">1</div>)
                                    :
                                    (<></>)
                                }
                                <span>Profile</span>
                            </Link>

                            <Link className="profile" to="/" onClick={handleLogout}>
                                <span>Log Out</span>
                            </Link>

                        </div>
                    ) : ( <div className="user">
                        <a href="/login">Sign In</a>
                        <a href="/register" className="profile">Sign Up</a>
                    </div>)
                }
                <div className="menuIcon">
                <img src="/menu.png" alt="" onClick={()=> setOpen(!open )}/>
                </div>
                <div className={open ? "menu active" :"menu"}>
                    <a href="/home">Home</a>
                    <a href="/home">About</a>
                    <a href="/home">Contact</a>
                    <a href="/home">Agents</a>
                    <a href="/login">Sign In</a>
                    <a href="/register">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
