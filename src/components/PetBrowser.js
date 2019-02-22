import React from 'react'

import Pet from './Pet'

function PetBrowser(props) {
  let pets = props.pets.map((pet, i) => {
    return <Pet pet={pet} key={i} onAdoptPet={props.onAdoptPet} />
  });
  return <div className="ui cards">{pets}</div>
}

export default PetBrowser
