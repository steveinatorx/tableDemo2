import { connect } from 'react-redux';
import  HelloWorld  from './components/HelloWorld';
import { getUUID } from './actions';

export const HelloWorldContainer = connect(
function mapStateToProps (state) {
  return {
    state: state
    };
  },
  function mapDispatchToProps (dispatch) {
    return {
      getUUID: () => dispatch(getUUID()),
    };
  }
)(HelloWorld);
