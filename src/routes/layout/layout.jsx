import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import HomePage from "../homePage/homePage";
import {Navigate, Outlet} from "react-router-dom";
import {UserContext} from "../../context/UserContext.jsx";
import {useContext, useEffect} from "react";

const Layout = () => {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
};

const RequireLayout = () => {
    const { user } = useContext(UserContext);
    return (
       !user ? <Navigate to={"/login"} /> : (<div className="layout">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>)
    );
};

export {Layout, RequireLayout};
