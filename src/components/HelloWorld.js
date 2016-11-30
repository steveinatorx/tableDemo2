import React from 'react';
// import sortBy from 'lodash'; 
import '../../css/skeleton.css';
import '../../css/skeleton-alerts.css';
// var MediaQuery = require('react-responsive');
// var classNames = require('classnames');
// var Radium = require('radium');

import styles from '../style';

export default class HelloWorld extends React.Component {
  static defaultProps = {
    showMe: false
  }
  static propTypes = {
    showMe: React.PropTypes.bool.isRequired
  }
  state = {
    showMe: false
  }
  constructor(props) {
    super(props);
    this._toggleShowMe = this._toggleShowMe.bind(this);
  }
  _toggleShowMe() {
    this.setState({showMe: !this.state.showMe});
  }
  render() {
    return (
      <div className="container" style={styles.topDiv}>
        <div className="sixteen columns">
            <div className="four columns offset-by-five">
                <button className="button-primary" onClick={this._toggleShowMe}>
                  press me
                </button>
                <p style={Object.assign({}, this.state.showMe ? {} : styles.hidden)}>
                  hello world!!!
                </p>
            </div>
        </div>
      </div>
    );
  }
}
