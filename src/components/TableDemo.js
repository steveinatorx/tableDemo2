import React from 'react';
import without from 'lodash'; 
import '../..//css/skeleton.css';
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
    //this._onDelete = this._onDelete.bind(this);
    this._deleteChecked = this._deleteChecked.bind(this);
    this.state = {
      showMe: props.showMe,
      // pull initial state data from reducer hydration
      cData: props.state.reducer.getIn(['data']).toJS(),
      // we will track check toggles as a state as it seems the columns prop will not hoist a dynamic ref
      checkList: []
    };
    console.log(this.state.data);
    this.columns = [
      {title: '', width: 50, dataIndex: 'check', key: 'check', render: (text, record, idx) =>
      <input type="checkbox" onChange={e => this._toggleCheck(record, idx, e)}/>},
      {title: 'Type', dataIndex: 'Type', key: 'type', width: 100},
      {title: 'Name', dataIndex: 'Name', key: 'name', width: 100},
      {title: 'Title', dataIndex: 'Title', key: 'title', width: 100},
      {title: 'Phone', dataIndex: 'Phone', key: 'phone', width: 100},
      {title: 'Ext', dataIndex: 'Ext', key: 'ext', width: 50},
      {title: 'Fax', dataIndex: 'Fax', key: 'fax', width: 100},
      {title: 'Email', dataIndex: 'Email', key: 'email', width: 100}
    ];
  }
  // end constructor
  componentWillReceiveProps(nextProps){
    console.log('heyooo CWRP', nextProps);   
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
  _deleteChecked() {
    console.log(this.state.checkList);
    //this.state.checkList.map(o => this.props.deleteRow(o)); 
    
    
    let self=this;
    
    this.state.checkList.map(function (o) {
      console.log('del->', o);
     self.props.deleteRow(o);

    });
    this.setState({ checkList: []})
  }
/*
  _onDelete(a,b,e) {
    console.log('Delete', a);
    console.log('Delete', b);
    console.log('Delete', e);

    e.preventDefault();
    //const data = this.state.cData.filter(item => item.key !== key);
    //this.setState({ cData: data });
  }*/
  _toggleCheck(key) {
    console.log('toggle', key.uuid);
    if (this.state.checkList.indexOf(key.uuid) > -1) {
      // untoggle, treat our state as immutable
      let newStateCheckList = without(this.state.checkList, key.uuid);
      this.setState({ checkList: newStateCheckList})
    } else {
      // toggle, treat our state as immutable
      let newStateCheckList=[...this.state.checkList, key.uuid];
      this.setState({ checkList: newStateCheckList});
    }
  }
  // a "tasteful" animation ;-)
  _getBodyWrapper(body) {
    return (
      <Animate transitionName="move" component="tbody" className={body.props.className}>
        {body.props.children}
      </Animate>
    );
  }
  render() {
    return (
      <div className="container" style={styles.topDiv}>
        <div className="sixteen columns" style={styles.testBorder}>
                <button className="button-primary" disabled={true} onClick={this._toggleShowMe}>
                  add row
                </button>
                <button className="button-primary" style={styles.btnMargin} onClick={this._deleteChecked}>
                  delete row
                </button>
               <Table
                  columns={this.columns}
                  data={this.props.state.reducer.getIn(['data']).toJS()}
                  getBodyWrapper={this._getBodyWrapper}
                />
            </div>
      </div>
    );
  }
}