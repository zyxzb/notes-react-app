import React from 'react';
import {TbSearch} from "react-icons/tb";

const Search = ({setSearchText}) => {

    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <div className='search'>
            <TbSearch className='loupe'/>
            <input 
                type="text" 
                placeholder='Search...'
                onChange={handleSearch}
                >
            </input>
        </div>
    );
}

export default Search;
