import { connect } from 'react-redux';
import TableDemo from './components/TableDemo';
import { getUUID, deleteRow } from './actions';

export const TableDemoContainer = connect(
function mapStateToProps(state) {
  return {
    state: state
  };
},

// action catalog
function mapDispatchToProps(dispatch) {
  return {
    getUUID: () => dispatch(getUUID()),
    deleteRow: (uuid) => dispatch(deleteRow(uuid))
  };
}
)(TableDemo);