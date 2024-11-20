import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import request from "../../lib/request.js";
import React, { useState } from "react";
import {getRandomBackgroundImage} from "../../lib/randomBgImg.js";

function Register() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = () => {
        if (error) {
            setError(null);
        }
    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const formData = new FormData(e.target);

        const firstName = formData.get("firstName").trim();
        const lastName = formData.get("lastName").trim();
        const email = formData.get("email").trim();
        const phone = formData.get("phone").trim();
        const company = formData.get("company").trim();
        const password = formData.get("password");

        if (!firstName || !lastName || !email || !password) {
            setError("Please fill in all required fields.");
            return;
        }

        try {
            const res = await request.post('/auth/register', {
                firstName,
                lastName,
                email,
                phone,
                company,
                password,
            });

            if (res.status === 201 || res.status === 200) {
                navigate('/login');
            } else {
                setError(e.response?.data?.message || "Registration failed. Please try again.");
            }
        } catch (e) {
            setLoading(false);
            setError(e.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Create an Account</h1>
                    {error && <div className="error">{error}</div>}
                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        required
                        onChange={handleInputChange}
                    />
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        required
                        onChange={handleInputChange}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        onChange={handleInputChange}
                    />
                    <input
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        onChange={handleInputChange}
                    />
                    <input
                        name="company"
                        type="text"
                        placeholder="Company"
                        onChange={handleInputChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        onChange={handleInputChange}
                    />
                    <button type="submit" disabled={loading}>Register</button>
                    <Link to="/login">Do you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src={getRandomBackgroundImage()} alt=""/>
            </div>
        </div>
    );
}

export default Register;
