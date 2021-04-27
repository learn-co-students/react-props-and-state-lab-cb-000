import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

  state = {
      pets: [],
      filters: {
        type: 'all'
      }
  }

  updateFilters = event => {
    this.setState({
      filters: {
        ... this.state.filters,
        type: [event.target.value]
      }
    })
  }

  fetchPets = () => {
    let petsApiUrl = '/api/pets'
    if (this.state.filters.type !== "all") {
      petsApiUrl += `?type=${this.state.filters.type}`
    }
    fetch(petsApiUrl)
    .then(response => response.json())
    // .then(petsArray => console.log(petsArray))
    .then(petsArray => this.setState({ pets: petsArray }))
  }

  setAdoption = id => {
    this.setState(prevState => ({
      pets: prevState.pets.map(
        pet => (pet.id === id ? Object.assign({}, pet, { isAdopted: true }) : pet)
      )
    }));
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.updateFilters}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.setAdoption} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App