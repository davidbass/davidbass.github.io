import React, { Component } from 'react'
import Highlight from './Highlight';

export class Experience extends Component {
  render() {
    return this.props.experience.map((job, index) => (
      <div className="card" key={job.id}>
        <h3 className="title"> 
          { job.title } @ <a target='_blank' rel='noopener noreferrer' href={job.url}>{ job.organization }</a>
          <span>{ job.startDate } - { job.endDate }</span>
        </h3>
        <ul>
          <Highlight highlights ={ job.highlights } />
        </ul>
      </div>
    ));    
  }
}

export default Experience
