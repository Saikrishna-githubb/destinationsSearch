import { Component } from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({ searchInput: event.target.value })
  }

  searchResults = () => {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filteredList = destinationsList.filter((eachDestination) =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredList;
  }

  render() {
    const { searchInput } = this.state
    const searchResults = this.searchResults()

    return (
      <div className="app-container">
        <div className="destinations-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destinations-list">
            {searchResults.map(eachDestination => (
                <DestinationItem
                    key={eachDestination.id}
                    destinationDetails={eachDestination}
                />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
