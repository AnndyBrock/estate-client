import "./filter.scss";

function Filter() {
    return (
        <div className="filter">
            <h1>
                Search results for <b>London</b>
            </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City Location"
                    />
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                        type="number"
                        id="minPrice"
                        min={0}
                        max={10000000}
                        name="minPrice"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input
                        type="number"
                        id="maxPrice"
                        min={0}
                        max={10000000}
                        name="maxPrice"
                        placeholder="any"
                    />
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <select name="bedroom" id="bedroom">
                        <option value="">any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">6</option>
                    </select>
                </div>
                <button>
                    <img src="/search.png" alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Filter;
