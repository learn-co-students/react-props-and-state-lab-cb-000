import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const { pets, onAdoptPet } = this.props;
    const petCards = pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={onAdoptPet} />);
    return <div className="ui cards">{petCards}</div>;
  }
}

export default PetBrowser;
