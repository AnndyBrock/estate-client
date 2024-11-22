import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import request from "../../lib/request.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import "./login.scss";
import {getRandomBackgroundImage} from "../../lib/randomBgImg.js";

function Login() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {updateUser} = useContext(AuthContext)

    const navigate = useNavigate();

    const handleInputChange = () => {
        if (error) {
            setError(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setLoading(true);
        const email = formData.get("email").trim();
        const password = formData.get("password");

        try {
            const res = await request.post("/auth/login", {
                email,
                password,
            });

            if (res.status === 201 || res.status === 200) {
                localStorage.setItem("user", JSON.stringify(res.data.user));
                updateUser(res.data.user);
                navigate("/");
            } else {
                setError(
                    e.response?.data?.message || "Login failed. Please try again."
                );
            }
        } catch (e) {
            console.log(e)
            setError(
                e.response?.data?.message || "An error occurred. Please try again."
            );
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome back</h1>
                    <input
                        name="email"
                        type="text"
                        placeholder="User Email"
                        required
                        onChange={handleInputChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        onChange={handleInputChange}
                    />
                    <button disabled={loading}>Login</button>
                    {error && <div className="error">{error}</div>}
                    <Link to="/register">Don't you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src={getRandomBackgroundImage()} alt="" />
            </div>
        </div>
    );
}

export default Login;
