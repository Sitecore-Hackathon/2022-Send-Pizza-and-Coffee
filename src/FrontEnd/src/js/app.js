require('./bootstrap');
window.$ = require('jquery');

$(document).ready(function(){
    
});

// Load React Compoents
import React from 'react';
import {Tracking } from './components/Tracking';
import {Notifications} from './components/Notifications';
import ReactDOM from 'react-dom';

if (document.getElementById('tracking')) {
  var element = document.getElementById('tracking');
  console.log(element.dataset);
  ReactDOM.render(<Tracking 
            {...element.dataset}
             />, element);
}

if (document.getElementById('rc-notifications')) {
    var dashboardElement = document.getElementById('rc-notifications');
    ReactDOM.render(<Notifications />, dashboardElement);
}