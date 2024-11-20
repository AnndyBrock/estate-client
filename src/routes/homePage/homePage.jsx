import './homePage.scss'
import SearchBar from "../../components/searchBar/SearchBar";

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p className="description">
                        Discover Your Dream Home: Explore our comprehensive real estate listings and find the perfect
                        property that fits your lifestyle. Whether you’re looking to buy, sell, or rent, we provide the
                        tools and resources to make your search easy and successful. Start your journey towards your
                        dream home today!
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>10+</h1>
                            <h2>Years of Experience+</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                             <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/bg_new.png"/>
            </div>
        </div>
    );
};

export default HomePage;
