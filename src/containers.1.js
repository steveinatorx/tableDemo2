import { connect } from 'react-redux';
import TableDemo from './components/TableDemo';
import DialogDemo from './components/DialogDemo';
import { deleteRows, toggleCheck, addRow } from './actions';

export const TableDemoContainer = connect(
function mapStateToProps(state) {
  return {
    state: state
  };
},
// dispatch catalog
function mapDispatchToProps(dispatch) {
  return {
    deleteRows: () => dispatch(deleteRows()),
    toggleCheck: (uuid) => dispatch(toggleCheck(uuid)),
    addRow: (row) => dispatch(addRow(row))
  };
}
)(TableDemo, DialogDemo);



export default TableDemoContainer;