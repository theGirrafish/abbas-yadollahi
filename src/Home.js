import React, {PureComponent} from 'react';
import HeaderBg from './code.jpg';
import ReactLogo from './reactlogo.svg';

class Home extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header Img" style={{backgroundImage: `url(${HeaderBg})`}}>
          <h1>Welcome to my Humble Abode</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
