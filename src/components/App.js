import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  
  changeType = (value) => {
    this.setState({
      filters: {
        ...this.filters,
        type: value
      }
    }, () => console.log("App state.filter updated to", this.state.filters.type))
  }

  fetchPets = () => {
    let query = this.state.filters.type;
    let endpointURL = query === 'all' ? '/api/pets' : `/api/pets?type=${query}`;

    fetch(endpointURL)
      .then( response => response.json() )
      .then( petData => this.setState({
          pets: petData 
        }, () => console.log(this.state))
      );
  }
  
  onAdoptPet = (petId) => {
    console.log("adopting pet with id ", petId);
    
    let pets = this.state.pets.map(pet => {
      return pet['id'] === petId ? {...pet, isAdopted: true } : pet;
    });
    
    this.setState({
      pets: pets
    })
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
