import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    var pets = React.Children.map(this.props.pets, pet => {
      return React.cloneElement(child, {onAdoptPet: this.props.onAdoptPet}, null)
    }
    return (
      <div className="ui cards">
        {pets}
      </div>
    )
  }
}

export default PetBrowser
