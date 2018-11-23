import React, {PureComponent} from 'react';
import HeaderBg from './code.jpg';

class Home extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header img" style={{backgroundImage: `url(${HeaderBg})`}}>
          <div className="center">
            <h3>The man behind the developer</h3>
            <h1>Abbas Yadollahi</h1>
            <br/><br/>
            <button className="App-button">Download Resume</button>
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
