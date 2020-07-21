import React from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Slider extends React.Component {
    render() {
        console.log('core/Slider#render this.props', this.props);
        return(
            <div>
                <RCSlider 
                    max={this.props.max}
                    min={this.props.min}
                    value={this.props.value}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

export default Slider;