import { useState } from 'react';
import './searchBar.scss';
import { Link } from "react-router-dom";

const types = ['buy', 'rent'];

const buildQueryString = (params) => {
    const queryParams = new URLSearchParams();
    for (const key in params) {
        const value = params[key];
        if (value !== null && value !== undefined && value !== '') {
            queryParams.append(key, value);
        }
    }
    return queryParams.toString();
};

const SearchBar = () => {
    const [query, setQuery] = useState({
        type: "buy",
        city: "",
        minPrice: "",
        maxPrice: ""
    });

    const switchType = (val) => {
        setQuery(prev => ({ ...prev, type: val }));
    };

    const handleChange = (e) => {
        setQuery(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="searchBar">
            <div className="type">
                {types.map(x => (
                    <button
                        key={x}
                        onClick={() => switchType(x)}
                        className={query.type === x ? "active" : ""}
                    >
                        {x}
                    </button>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="minPrice"
                    min={0}
                    max={10000000}
                    placeholder="Min Price"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="maxPrice"
                    min={0}
                    max={10000000}
                    placeholder="Max Price"
                    onChange={handleChange}
                />
                <Link to={`/list?${buildQueryString(query)}`}>
                    <button type="submit">
                        <img src="/search.png" alt="Search" />
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default SearchBar;
