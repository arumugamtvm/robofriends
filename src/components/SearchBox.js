import React from "react";

const SearchBox = ({searchValue, setSearchValue}) => {
    const onSearchChange=(event)=>{setSearchValue(event.target.value)}
    return (
        <div className="pa2 ">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search Robots" value={searchValue} onChange={onSearchChange}/>
        </div>
    )
}

export default SearchBox