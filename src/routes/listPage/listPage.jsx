import "./listPage.scss"
import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card.jsx";
import Map from "../../components/map/Map.jsx";
import Location from "../../components/location/Location.jsx";

const ListPage = () => {
    return (
        <div className="listPage ">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    { listData.map(item => (
                        <Card key={item.id} item={item}/>
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={listData}/>
            </div>
        </div>
    );
};

export default ListPage;
