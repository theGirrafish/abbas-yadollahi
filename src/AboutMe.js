import React, {PureComponent} from 'react';
import HeaderBg from './codeee.png';

class AboutMe extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Abbas',
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header img" style={{backgroundImage: `url(${HeaderBg})`}}>
          <div className="center">
            <h1>More Than Just A Developer</h1>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default AboutMe;