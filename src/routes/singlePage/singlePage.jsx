import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import {useLoaderData, useNavigate} from "react-router-dom";
import {useContext, useState} from 'react';
import DOMPurify from "dompurify"
import requestAPI from "../../lib/request.js";
import { AuthContext } from '../../context/AuthContext.jsx';

function SinglePage() {
    const singlePostData = useLoaderData();
    const [saved, setSaved] = useState(singlePostData.isSaved)

    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    const handeSave = async () => {
        if (!user) {
            navigate("/login");
        }
        try {
            console.log(3)
            await requestAPI.post("/users/save", {postId: singlePostData.id});
            setSaved((prev) => !prev)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className="price">$ {singlePostData.price}</div>
                            </div>
                            <div className="user">
                                <img src={singlePostData.user.avatar} alt="" />
                                <span>{singlePostData.user.firstName}</span>
                            </div>
                        </div>
                        <div className="bottom" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(singlePostData.postDetail.desc)}} />
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/utility.png" alt="" />
                            <div className="featureText">
                                <span>Utilities</span>
                                {
                                    singlePostData.postDetail.utilities === "owner" ?
                                        <p>Owner is responsible</p> : <p>Tenant is responsible</p>
                                }
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                {
                                    singlePostData.postDetail.utilities === "allowed" ?
                                        <p>Pets friendly</p> : <p>No pets</p>
                                }
                                <p>Pets Allowed</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Income Policy</span>
                                <p>{singlePostData.postDetail.income}</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/size.png" alt="" />
                            <span>{singlePostData.postDetail.size} sqft</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png" alt="" />
                            <span>{singlePostData.bedroom} beds</span>
                        </div>
                        <div className="size">
                            <img src="/bath.png" alt="" />
                            <span>{singlePostData.bathroom} bathroom</span>
                        </div>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src="/school.png" alt="" />
                            <div className="featureText">
                                <span>School</span>
                                <p>{singlePostData.postDetail.school}m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="" />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>{singlePostData.postDetail.bus}m away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="" />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>{singlePostData.postDetail.restaurant}m away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />
                            Send a Message
                        </button>
                        <button onClick={handeSave} style={{
                            background: saved ? "#fece51" : "white"
                        }}>
                            <img src="/save.png" alt="" />
                            {saved ? "Place Saved" :"Save the Place"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePage;
