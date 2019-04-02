import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props) {
    super(props) ;
  }

  render() {
    var reference = this ;
    const pets = this.props.pets.map (animal => {
     return <Pet  id={animal.id} type={animal.type} name={animal.name} weight={animal.weight} age={animal.age}
     isAdopted={animal.isAdopted} onAdoptPet={this.props.onAdoptPet} /> ;
    }) ;
    console.log(pets) ;
    return <div className="ui cards"> {pets} </div>
  }
}

export default PetBrowser
