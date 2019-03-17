import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  createPet = (petData) => {
    return (
      <Pet
        key={petData['id']}
        id={petData['id']}
        name={petData['name']}
        type={petData['type']}
        age={petData['age']}
        weight={petData['weight']}
        gender={petData['gender']}
        isAdopted={petData['isAdopted']}
        onAdoptPet={this.props.onAdoptPet}
      />
    )
  }
  
  render() {
    const pets = this.props.pets;
    const petCards = pets.map(pet => this.createPet(pet));
    
    return (
      <div className="ui cards">
        {petCards}
      </div>
    )
  }
}

export default PetBrowser
