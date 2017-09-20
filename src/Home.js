import React, {PureComponent} from 'react';
import HeaderBg from './code.jpg';
import ReactLogo from './reactlogo.svg';

class Home extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header img" style={{backgroundImage: `url(${HeaderBg})`}}>
          <div className="center">
            <h3>Where Abbas and Perfection Meet</h3>
            <h1>Welcome to my Humble Abode</h1>
          </div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
