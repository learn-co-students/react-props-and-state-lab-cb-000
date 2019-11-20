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

  handleChangeType = (newType) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    })
  }

  handleFindPets = () => {
    if(this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(res => res.json())
      .then(res => this.setState({ pets: res }))
      .catch(() => this.setState({ hasErrors: true }));
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(res => this.setState({ pets: res }))
      .catch(() => this.setState({ hasErrors: true }));
    }
  }

  handleAdoption = id => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true} : p;
    });

    this.setState({pets: pets});
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
              <Filters onChangeType={this.handleChangeType}
              onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
               onAdoptPet={this.handleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
