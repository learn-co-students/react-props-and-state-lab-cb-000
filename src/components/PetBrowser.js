import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor() {
    super();

    this.state = {
      adopted: false
    }
  }


  render() {

    const petList = this.props.pets.map(pet =>{
      if(this.props.adoptedPets.find((adoptedPet) => adoptedPet == pet)){
        this.setState({
          adopted:true
        })
      }
      return (<div>
        <Pet name = {pet.name}
            type = {pet.type}
            age = {pet.age}
            weight = {pet.weight}
            gender = {pet.gender}
            onAdoptPet = {this.props.onAdoptPet}
            isAdopted = {this.state.adopted}
        />
        </div>)
      })

    return (
      <div className="ui cards">
        {/* <code>&lt;Pet /&gt;</code> &nbsp; components should go here */}
        {petList}
      </div>
    );
  }
}

export default PetBrowser;
