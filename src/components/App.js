import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }
  handleChangeType = (filterType) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: filterType})
    })
  }
  handleFindPets = () => {
    const searchType = this.state.filters.type
    if(searchType === "all"){
      fetch(`/api/pets`)
      .then(data => this.setState({
        pets: data
      }))
    } else {
      fetch(`/api/pets?type=${searchType}`)
      .then(data => this.setState({
        pets: data
      }))
    }
  }

  handleAdoption = (id) => {
    const updatedAdoptedPets = this.state.adoptedPets.concat(id)
    this.setState({
      adoptedPets: updatedAdoptedPets
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} adoptedPets = {this.state.adoptedPets} onAdoptPet={this.handleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
