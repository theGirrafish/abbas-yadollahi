import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import AboutMe from './AboutMe';
import NavigationBar from './NavigationBar';
import registerServiceWorker from './registerServiceWorker';

const url = window.location.href;
let component = (
  <div>
    <NavigationBar/>
    <App/>
    <App/>
  </div>
);

if (url.includes('/aboutme')) {
  component = <AboutMe/>;
}
// else if (url.includes('/resume')) {
//   component = <Resume/>''
// }


ReactDOM.render(component, document.getElementById('root'));
// registerServiceWorker();
