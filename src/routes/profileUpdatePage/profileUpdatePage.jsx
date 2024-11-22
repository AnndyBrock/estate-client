import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext, useEffect, useState} from "react";
import "./profileUpdatePage.scss";
import {useNavigate} from "react-router-dom";
import request from "../../lib/request.js";
import UploadWidget from "../../components/uploadWidget/UploadWidget";


function ProfileUpdatePage () {
    const { user, updateUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [avatar, setAvatar] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = () => {
        if (error) {
            setError(null);
        }
    };

    useEffect(() => {}, [user]);

    console.log(user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.target);

        const { firstName, lastName, email, phone, password, company } = Object.fromEntries(formData);

        try {
            const res = await request.put(`/users/${user.id}`, {
                firstName,
                lastName,
                email,
                phone,
                password,
                company,
                avatar:avatar[0]
            });

            setLoading(false)
            updateUser(res.data);
            navigate("/profile");
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        }
    };

    return (
        <div className="profileUpdatePage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>User Profile</h1>
                    {error && <div className="error">{error}</div>}
                    <div className="item">
                        <input
                            name="firstName"
                            defaultValue={user.firstName}
                            type="text"
                            placeholder="First Name"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="item">
                        <input
                            name="lastName"
                            defaultValue={user.lastName}
                            type="text"
                            placeholder="Last Name"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="item">
                        <input
                            defaultValue={user.email}
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="item">
                        <input
                            defaultValue={user.phone}
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="item">
                        <input
                            defaultValue={user.company}
                            name="company"
                            type="text"
                            placeholder="Company"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" disabled={loading}>Update</button>
                    {error && <span>error</span>}
                </form>
            </div>

            <div className="sideContainer">
                <img src={avatar[0] || user.avatar || "/noavatar.jpg"} alt="" className="avatar"/>
                <UploadWidget
                    uwConfig={{
                        cloudName: "dmw3z3edl",
                        uploadPreset: "estare",
                        multiple: false,
                        maxImageFileSize: 2000000,
                        folder: "avatars",
                    }}
                    setState={setAvatar}
                />
            </div>
        </div>
    );
}

export default ProfileUpdatePage
