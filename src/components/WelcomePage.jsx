import React, {PureComponent} from 'react';
import Logo from '../assets/images/react.png';

class WelcomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      displayTime: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick = () => this.setState({date: new Date()});

  showTime = () => this.setState((prevState) => ({displayTime: !prevState.displayTime}));

  render() {
    return (
      <div className='background'>
        <img className='react_logo' src={Logo}/>
        <div className='text'>
          <span className='title'>Abbas Yadollahi</span>
          <span className='subtitle'>Welcome!</span>
          <span className='subtitle'>Sorry for the inconvenience, I'm currently updating my personal webpage.</span>
          <span className='subtitle'>Come back soon!</span>
        </div>
        <div className='time'>
          <span id='datetime' className='subtitle' onClick={this.showTime}>
            {this.state.displayTime ? this.state.date.toLocaleTimeString() : this.state.date.toLocaleDateString()}
          </span>
          <span className='subtitle'>
            <div className='btn-cont'>
              <a className='btn' href='resume.pdf'>
                Check out my CV!
                <span className='line-1'></span>
                <span className='line-2'></span>
                <span className='line-3'></span>
                <span className='line-4'></span>
              </a>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
