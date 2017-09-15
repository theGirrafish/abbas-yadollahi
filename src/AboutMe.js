import React, {PureComponent} from 'react';
import HeaderBg from './codeee.png';
import ReactLogo from './reactlogo.svg';

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
        <div className="App-header Img" style={{backgroundImage: `url(${HeaderBg})`}}>
          <img src={ReactLogo} className="App-logo" alt="logo"/>
          <h2>More Than Just A Developer</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default AboutMe;