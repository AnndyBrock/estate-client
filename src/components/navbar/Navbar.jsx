import {useContext, useState} from 'react';
import './navbar.scss'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext.jsx';
import request from "../../lib/request.js";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const { user, updateUser } = useContext(AuthContext);
    const [notification, setNotification] = useState(2)

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await request.post('/auth/logout');

            if (res.status === 200) {
                updateUser(null)
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
                    <img src="/logo_2.png" />
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
                            <div
                                className="username-dropdown"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                aria-haspopup="true"
                                aria-expanded={isHovered}
                            >
                <span className="username">
                    {`${user.firstName || ''}`.trim()}
                    {!isHovered && notification && (
                        <div className="notification">{notification}</div>
                    )}
                </span>
                                <div className="dropdown-content">
                                    <Link className="dropdown-link profile" to="/profile">
                                        {isHovered && notification ? (
                                            <div className="notification">{notification}</div>
                                        ) : null}
                                        <span>Profile</span>
                                    </Link>
                                    <Link className="dropdown-link listings" to="/listings">
                                        <span>Listings</span>
                                    </Link>
                                </div>
                            </div>
                            <Link to="/" onClick={handleLogout} className="logout-link">
                                <span>Log Out</span>
                            </Link>
                        </div>
                    ) : (<div className="user">
                        <a href="/login">Sign In</a>
                        <a href="/register" className="profile">Sign Up</a>
                    </div>)
                }
                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen(!open)}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
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
