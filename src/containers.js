import { connect } from 'react-redux';
import TableDemo from './components/TableDemo';
import DialogDemo from './components/DialogDemo';
import { deleteRows, toggleCheck, addRow } from './actions';

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps =(dispatch) => {
  return {
      deleteRows: () => dispatch(deleteRows()),
      toggleCheck: (uuid) => dispatch(toggleCheck(uuid)),
      addRow: (row) => dispatch(addRow(row))
  };
}

export const TableDemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableDemo, DialogDemo);

export default TableDemoContainer;