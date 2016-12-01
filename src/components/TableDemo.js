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
    this._toggleCollapse = this._toggleCollapse.bind(this);
    this._deleteChecked = this._deleteChecked.bind(this);
    this._addRowDialog = this._addRowDialog.bind(this);
    this._onCloseDialog = this._onCloseDialog.bind(this);
    this._submitDialog = this._submitDialog.bind(this);
    this.state = {
      isVisible: true,
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
      this.setState({
        dialogVisible: false
      });

    }
  }
  _toggleCollapse(){
    /* NOTE: some interesting behavior here adding css transitions to the main div and rerendering the table component,
     in the spirit of not letting perfect be the enemy of functional for a coding excercise
     will just toggle a simple visibility: hidden class. not as pretty but it works */
    this.setState({isVisible: !this.state.isVisible});
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
          <div className="block row sixteen columns">
            <h5 style={styles.inlineStyle} className="demoBlue">External Contacts</h5>
            <div className="u-pull-right">
            {this.state.isVisible &&
              <label className="collapseLabel">
              <a className="button button-icon collapseBtn" onClick={this._toggleCollapse}>
               <i className="fa fa-minus" />
              </a>
                Collapse
              </label>
            }
            {!this.state.isVisible &&
              <label className="collapseLabel">
              <a className="button button-icon collapseBtn" onClick={this._toggleCollapse}>
               <i className="fa fa-plus" />
              </a>
                Expand
              </label>
            }

            </div>
          <div className="rows">
            Select the client contacts associated with this offer.
          </div>
            </div>

              <div className="mainDiv" style={Object.assign({}, this.state.isVisible ? {} : styles.hidden)}>
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
               <Dialog
                visible={this.state.dialogVisible}
                wrapClassName="center"
                animation="zoom"
                maskAnimation="fade"
                onClose={this._onCloseDialog}
                style={styles.dialogStyle}
              >
                <p>Add Data</p>
                <Form ref="simpleForm">
                  <Field
                    name='Type'
                    placeholder='Enter Type'
                    type='text'
                    validators= {[
                    'required'
                    ]}
                  />
                  <Field
                    name='Name'
                    placeholder='Enter Name'
                    type='text'
                    validators= {[
                    'required'
                    ]}
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
      </div>
    );
  }
}