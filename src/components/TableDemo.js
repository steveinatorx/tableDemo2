import React from 'react';
import '../../css/skeleton.css';
import '../../css/skeleton-alerts.css';
import '../../css/skeleton-fontawesome-buttons.css';
import '../../css/font-awesome.css';
import '../../css/myTable.css';
// var MediaQuery = require('react-responsive');
// var classNames = require('classnames');
// var Radium = require('radium');
const Table = require('rc-table');
import Dialog from 'rc-dialog';
import Animate from 'rc-animate';
import {Form, Field} from 'simple-react-forms';

import 'rc-table/assets/index.css';
import 'rc-table/assets/animation.css';

import styles from '../style';

export default class TableDemo extends React.Component {
  constructor(props) {
    super(props);
    this._deleteChecked = this._deleteChecked.bind(this);
    this._addRowDialog = this._addRowDialog.bind(this);
    this._onCloseDialog = this._onCloseDialog.bind(this);
    this._submitDialog = this._submitDialog.bind(this);
    this.state = {
      isCollapsed: false,
      // pull initial state data from reducer hydration
      cData: props.state.reducer.getIn(['data']).toJS(),
      // we will track check toggles as a state as it seems the columns prop will not hoist a dynamic ref
      checkList: [],
      dialogVisible: false
    };
    console.log(this.state.data);
    this.columns = [
      {title: '', width: 25, dataIndex: 'check', key: 'check', render: (text, record, idx) =>
      <input type="checkbox" checked={record.check} onChange={e => this._toggleCheck(record, idx, e)}/>},
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
    console.log('CWRP:', nextProps);   
  }
  // get eslint to hush up about injected prop types from redux connect
  static propTypes = {
    state: React.PropTypes.object.isRequired,
    deleteRows: React.PropTypes.func,
    toggleCheck: React.PropTypes.func,
    addRow: React.PropTypes.func
  }
  _toggleShowMe() {
    this.setState({showMe: !this.state.showMe});
  }
  _deleteChecked() {
    this.props.deleteRows();
  }
  _addRowDialog() {
    console.log('dia');
    this.setState({
      dialogVisible: true
    });
    console.log(this.state.dialogVisible);
  }
  _onCloseDialog() {
    console.log('close dg');
    this.setState({
      dialogVisible: false
    });
  }
  _toggleCheck(key) {
    this.props.toggleCheck(key.uuid);
  }
  _submitDialog(){
    console.log(this.refs.simpleForm.isValid());
    if (this.refs.simpleForm.isValid()) {
      console.log(this.refs.simpleForm.getFormValues());
      this.props.addRow(this.refs.simpleForm.getFormValues())  
    }
  }
  _toggleCollapse(){
    this.setState({})  
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
        <div className="sixteen columns">
          <div style={styles.testBorder} className="row sixteen columns">
            <h5 style={styles.inlineStyle} className="demoBlue">External Contacts</h5>
            <div className="u-pull-right">
              <label className="collapseLabel">
              <a className="button button-icon">
               <i className="fa fa-cog" />
              </a>
                Collapse
              </label>
            </div>
            </div>
                <button className="button-primary" onClick={this._addRowDialog}>
                  add row
                </button>
                <button className="button-primary" style={styles.btnMargin} onClick={this._deleteChecked}>
                  delete row
                </button>
               <Table
                  columns={this.columns}
                  data={this.props.state.reducer.getIn(['data']).toJS()}
                  getBodyWrapper={this._getBodyWrapper}
                  scroll={{x: true}}
                  className="myTable"
                />
                
               <span>{this.state.showMe}</span>
               <Dialog
                visible={this.state.dialogVisible}
                wrapClassName="center"
                animation="zoom"
                maskAnimation="fade"
                onClose={this._onCloseDialog}
                style={styles.dialogStyle}
                //mousePosition={this.state.mousePosition}
              >
                <p>Add Data</p>
                <Form ref="simpleForm">
                  <Field
                    name='Type'
                    label='Enter Type'
                    type='text'
                  />
                  <Field
                    name='Name'
                    label='Enter Name'
                    type='text'
                  />
                  <Field
                    name="Title"
                    placeholder="Enter Title"
                    type="text"
                    validators= {[
                    'required'
                    ]}
                  />
              </Form>
              <button onClick={this._submitDialog} className="button-primary">Submit</button>
              </Dialog>
 
                
            </div>
      </div>
    );
  }
}