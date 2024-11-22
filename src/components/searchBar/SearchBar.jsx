import {useState} from 'react';
import './searchBar.scss'

const types = ['buy', 'rent']

const SearchBar = () => {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    })

    const switchType = (val) => {
        setQuery(prev => ({ ...prev, type: val }))
    }

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
            <form>
                <input
                    type="text"
                    name="location"
                    placeholder="City"/>
                <input
                    type="number"
                    name="minPrice"
                    min={0}
                    max={10000000}
                    placeholder="Min Price"
                />
                <input
                    type="number"
                    name="maxPrice"
                    min={0}
                    max={10000000}
                    placeholder="Max Price"
                />
                <button>
                    <img src="/search.png" alt=""/>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
