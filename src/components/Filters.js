import React from 'react'

class Filters extends React.Component {

  this.state {
    type: 'all'
  }

  handleChange = e => {
    var type = e.target.value;
    setState({type: type});
    this.props.onChangeType(type);
  }

  handleClick = () => {
    this.props.onFindPetsClick(type);
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
