import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/WelcomePage';

// Style sheets
import './assets/styles/main.css';
import './assets/styles/main.scss';

const toRender = (
  <WelcomePage/>
);

ReactDOM.render(toRender, document.getElementById('app'));
