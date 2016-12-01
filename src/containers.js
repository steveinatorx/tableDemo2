import { connect } from 'react-redux';
import TableDemo from './components/TableDemo';
import DialogDemo from './components/DialogDemo';
import { getUUID, deleteRows, toggleCheck, addRow } from './actions';

export const TableDemoContainer = connect(
function mapStateToProps(state) {
  return {
    state: state
  };
},
// dispatch catalog
function mapDispatchToProps(dispatch) {
  return {
    getUUID: () => dispatch(getUUID()),
    deleteRows: () => dispatch(deleteRows()),
    toggleCheck: (uuid) => dispatch(toggleCheck(uuid)),
    addRow: (row) => dispatch(addRow(row))
  };
}
)(TableDemo, DialogDemo);