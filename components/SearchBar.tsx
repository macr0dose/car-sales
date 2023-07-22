"use client"

import { useState } from "react"

import SearchManufacturer  from "./SearchManufacturer"

const SearchBar = () => {
  const [manufacturer, setManufacturer ] = useState("");

  const handleSearch = () => {}

  return (
    <form className='SearchBar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setmanufacturer}
        />
      </div>

    </form>
  )
}

export default SearchBar