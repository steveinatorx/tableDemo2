import React from 'react';
import sortBy from 'lodash'; 
import '../../css/skeleton.css';
import '../../css/skeleton-alerts.css';
var MediaQuery = require('react-responsive');
var classNames = require('classnames');
var Radium = require('radium');

export default class HelloWorld extends React.Component {
  constructor() {
    super(); 
  }
  componentWillReceiveProps (newProps) {
    console.log('in CWRP', newProps.state);    
  }
  render () {
    return (
      <div>
        hello world!!!
      </div>
    )
  }  
}//end class