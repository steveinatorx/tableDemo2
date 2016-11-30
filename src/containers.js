import { connect } from 'react-redux';
import TableDemo from './components/TableDemo';
import { getUUID } from './actions';

export const TableDemoContainer = connect(
function mapStateToProps(state) {
  return {
    state: state
  };
},
function mapDispatchToProps(dispatch) {
  return {
    getUUID: () => dispatch(getUUID())
  };
}
)(TableDemo);