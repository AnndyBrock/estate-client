import {UserContext} from "../../context/UserContext.jsx";
import {useContext} from "react";

function ProfileUpdatePage () {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="profileUpdatePage">
            Update profile {user.firstName}
        </div>
    )
}

export default ProfileUpdatePage
