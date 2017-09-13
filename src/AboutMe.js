import React, {PureComponent} from 'react';

class AboutMe extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Abbas',
    };
  }

  render() {
    return (
      <div>
        <p>Hi</p>
      </div>
    );
  }
}

export default AboutMe;