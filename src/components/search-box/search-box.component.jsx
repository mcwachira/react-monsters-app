import React from 'react'

import './search-box.styles.css'
const SearchBox = ({ placeholder, onChangeHandler }) => {
    return (
        <div >
            <input className='search' type="search" placeholder={placeholder}
                onChange={onChangeHandler} />

        </div>
    )
}

export default SearchBox