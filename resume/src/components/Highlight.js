import React, { Component } from 'react'

export class Highlight extends Component {
  render() {
    return this.props.details.map((detail, index) => (
      <li key={detail.id}>
        { detail.summary }
      </li>
    ));    
  }
}

export default Highlight
