import React from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';

class HeartRate extends React.Component {
    render() {
        return (
            <div className="box col-md-2 col-6">
                <Icon name={"favorite"} color={"red"} />
                <Slider 
                max={this.props.max}
                min={this.props.min}
                onChange={this.props.onChange}
                value={this.props.heart} />
            </div>
        );
    }
}

export default HeartRate;