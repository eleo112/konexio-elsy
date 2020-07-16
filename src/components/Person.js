import React from 'react';
import Icon from './core/Icon';

class Person extends React.Component {
  render() {
    return (
        <div className="box col-md-2 col-6">
            <Icon name={"directions_walk"} />
            {/* <span className="material-icons" style={{
                    fontSize: 100,
                    color: "black",
                }}>
                    directions_walk
                </span> */}
        </div>
    );
  }
}

export default Person;