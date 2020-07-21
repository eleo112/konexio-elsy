import React from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';

class Temperature extends React.Component {
  render() {
    return (
        <div className="box col-md-2 col-6">
            <Icon 
                name={"wb_sunny"}
                color={"yellow"} />
            <Slider 
                max={this.props.max}
                min={this.props.min}
                value={this.props.temperature}
                onChange={this.props.onChange} />
        </div>
    );
  }
}

export default Temperature;