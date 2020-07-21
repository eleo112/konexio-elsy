import React from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';

class Person extends React.Component {
  render() {
    return (
        <div className="box col-md-2 col-6">
            <Icon 
              name={"directions_walk"} />
            <Slider 
              max={this.props.max}
              min={this.props.min}
              value={this.props.steps}
              onChange={this.props.onChange}/>
        </div>
    );
  }
}

export default Person;