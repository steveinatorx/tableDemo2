import { connect } from 'react-redux';
import TableDemo from './components/TableDemo';
import { getUUID, deleteRows, toggleCheck } from './actions';

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
    toggleCheck: (uuid) => dispatch(toggleCheck(uuid))
  };
}
)(TableDemo);