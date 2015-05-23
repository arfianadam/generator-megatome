'use strict';

if (__DEV__) {
  
  require('exports?request!superagent');
  require('exports?React!react/addons');
  require('exports?Router!react-router');
  require('exports?Bacon!baconjs');
  require('exports?Immutable!immutable');
  require('exports?moment!moment');
  
  if(process.env.BROWSER_ENV && !document.querySelector('head > script.hot')) {
    var script = document.createElement('script');
    script.className = 'hot';
    script.src = "http://localhost:8000/webpack-dev-server.js";
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}
