import React from 'react';
// import sortBy from 'lodash'; 
import '../../css/skeleton.css';
import '../../css/skeleton-alerts.css';
// var MediaQuery = require('react-responsive');
// var classNames = require('classnames');
// var Radium = require('radium');
const Table = require('rc-table');
import Animate from 'rc-animate';

import 'rc-table/assets/index.css';
import 'rc-table/assets/animation.css';

import styles from '../style';

export default class TableDemo extends React.Component {
  constructor(props) {
    super(props);
    this._toggleShowMe = this._toggleShowMe.bind(this);
    this.state = {
      showMe: props.showMe,
      // convert my immutable col template List to a state array to feed the Table
      columns: props.state.reducer.getIn(['template']).toJS()
    };
    console.log(props);
    console.log(props.state.reducer.getIn(['template']).toJS());
    // reducer.getIn(['data']).toJs());

  }
  static defaultProps = {
    showMe: true
  }
  static propTypes = {
    showMe: React.PropTypes.bool.isRequired
  }
  _toggleShowMe() {
    this.setState({showMe: !this.state.showMe});
  }
  render() {
    return (
      <div className="container" style={styles.topDiv}>
        <div className="sixteen columns" style={styles.testBorder}>
                <button className="button-primary" disabled={true} onClick={this._toggleShowMe}>
                  add row
                </button>
                <button className="button-primary" style={styles.btnMargin} onClick={this._toggleShowMe}>
                  delete row
                </button>
                <p style={Object.assign({}, this.state.showMe ? {} : styles.hidden)}>
                  hello world!!
                </p>
                <Table
                  columns={this.columns}
                  data={this.state.data}
                  getBodyWrapper={this.getBodyWrapper}
                />
            </div>
      </div>
    );
  }
}