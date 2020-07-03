import React, { useState, useEffect } from 'react'
import {SearchBar, SearchInput} from './style'

const Search = () => {
  const [query, setQuery ] = useState('')

  useEffect(() => {
  })

  const searchChange = (e) => {
    let query = e.currentTarget.value
    setQuery(query);
  };

  return (
    <SearchBar>
      <i className="iconfont">&#xe60c;</i>
      <SearchInput
        type="search"
        value={ query }
        onChange={searchChange}
        // innerRef={(input) => { this.searchQueryRef = input}}
        className="search_bar_input c_input"
        placeholder="搜索"
      />
    </SearchBar>
  )
}

export default React.memo(Search)
