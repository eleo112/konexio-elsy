import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Temperature from './components/Temperature';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEP = 0;
const MAX_STEP = 50000;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      water: 0,
      val: 120,
      temperature: -10,
      steps: 3000,
    };

    this.onStepsChange = this.onStepsChange.bind(this);
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);

  }

  onStepsChange(val) {
    this.setState({
      steps: val
    });
    this.calculateWater();
  }

  onHeartChange(val) {
    console.log('App#onHeartChange');
    console.log('App#onHeartChange val', val);
    this.setState({
      heart: val
    });
    this.calculateWater();
  }

  onTemperatureChange(val) {
    this.setState({
      temperature: val
    });
    this.calculateWater();
  }

  calculateWater() {
    // const temperature = this.state.temperature;
    const {
      temperature,
      steps,
      heart
    } = this.state;

    let currentStep = 0;
    let currentTemp = 0;
    let currentHeart = 0;

    if (steps > 10000) {
      currentStep = (steps - 10000) * 0.00002;
    }
    if (temperature > 20) {
      currentTemp = (temperature - 20) * 0.02;
    }
    if (heart > 120) {
      currentHeart = (heart - 120) * 0.0008;
    }

    const waterRaw = 1.5 + currentStep + currentTemp + currentHeart;
    const water = parseInt(waterRaw * 100) / 100;

    this.setState({
      water: water
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="box col-md-2 col-6">
          <span class="material-icons" style={{
                    fontSize: 100,
                    color: "blue",
          }}>
            local_drink
          </span>
          {this.state.water} L
        </div>
          <Person 
              min={MIN_STEP}
              max={MAX_STEP}
              steps={this.state.steps}
              onChange={this.onStepsChange} />
          <HeartRate 
              min={MIN_HEART}
              max={MAX_HEART}
              heart={this.state.heart}
              onChange={this.onHeartChange} />
          <Temperature
            min={MIN_TEMPERATURE}
            max={MAX_TEMPERATURE}
            heart={this.state.temperature}
            onChange={this.onTemperatureChange} />
        </div>
      </div>
    );
  }
}

export default App;