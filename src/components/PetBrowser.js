import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petList = this.props.pets.map((pet) =>{
      if(this.props.adoptedPets.find((adoptedPet) => pet.id === adoptedPet)){
        return <Pet key= {pet.id} pet = {pet} onAdoptPet = {this.props.onAdoptPet} isAdopted = {true} />
      } else {
        return <Pet key= {pet.id} pet = {pet} onAdoptPet = {this.props.onAdoptPet} isAdopted = {false} />
      }}
      )

    return (
      <div className="ui cards">
        {petList}
      </div>
    );
  }
}

export default PetBrowser;
