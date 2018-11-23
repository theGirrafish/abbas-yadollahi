import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import AboutMe from './AboutMe';
import NavigationBar from './NavigationBar';
import registerServiceWorker from './registerServiceWorker';

const base_url = window.location.origin;
const url = window.location.href;

let component = (
  <div>
    <Home/>
  </div>
);

if (url.includes('/aboutme')) {
  component = <AboutMe/>;
}
// else if (url.includes('/experience')) {
//   component = <Experience/>;
// } else if (url.includes('/skills')) {
//   component = <Skills/>;
// } else if (url.includes('/projects')) {
//   component = <Projects/>;
// } else if (url.includes('/contact')) {
//   component = <Contact/>;
// }

const toRender = (
  <div>
    <NavigationBar/>
    {component}
    <Home/>
  </div>
)

ReactDOM.render(toRender, document.getElementById('root'));
// registerServiceWorker();
