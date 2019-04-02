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
  onChangeType = (newtype) => {
    console.log(newtype) ;
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: newtype
      })
    })
  } ;
  onFindPetsClick = () => {
    var type = this.state.filters.type ;
    var url ;
    var start = '/api/pets' ;
    var value ;
    type === 'all' ? url = start : url = start + `?type=${type}` ;
    fetch(url)
    .then(response => response.json())
    .then (pets => this.setState({ pets } ) )
    .then (console.log(this.state.pets))
    .catch(error => console.error(error) ) ;

  }
  onAdoptPet = (id) => {
    const newPets = this.state.pets.map( pet => pet.id === id ? {...pet, isAdopted: true} : pet ) ;
    console.log("someone got adopted") ;
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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
