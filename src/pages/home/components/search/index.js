// Profiler 收集组件渲染就是
import React, { Component } from 'react'
import {SearchBar, SearchInput} from './style'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  searchChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  render () {
    const { query } = this.state
    return (
      <SearchBar>
        <i className="iconfont iconsearch"></i>
        <SearchInput
          type="search"
          value={ query }
          onChange={this.searchChange}
          // innerRef={(input) => { this.searchQueryRef = input}}
          className="search_bar_input c_input"
          placeholder="搜索"
        />
      </SearchBar>
    );
  }
}

export default Search
