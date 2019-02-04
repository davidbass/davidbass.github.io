import React, { Component } from 'react'
import numeratorImg from '../images/596979_gradient.gif';
import denominatorImg from '../images/596979_gradient_empty.gif';
import { Sparklines, SparklinesCurve } from 'react-sparklines';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare,  } from '@fortawesome/free-solid-svg-icons'

library.add(faSquare, faCheckSquare)

function getRemainder(numerator) {
  const denominator = (100 - numerator) / 2;
  return denominator;
}

export class Skills extends Component {  
  render() {
    return this.props.skills.map((skill, index) => (
      <div className='row title' key={ skill.id }>
        <div className="column">{ skill.name }</div>
        {/* <FontAwesomeIcon icon="square" />  */}
        <div className="column">
          <div className="nowrap"><img alt="numerator" border="1" src={ numeratorImg } width={ skill.confidence/2 } height="7" /><img alt="denominator" border="1" src={ denominatorImg } width={ getRemainder(skill.confidence) } height="7" /></div>
        </div>
        <div className="right">
          <Sparklines data={skill.usage} svgHeight={15} svgWidth={60} margin={5}>
            <SparklinesCurve color="blue" />
          </Sparklines>
        </div>
      </div>
    ));    

  }
}

export default Skills
