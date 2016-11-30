import { List, Map } from 'immutable';
let uuid = require('node-uuid');

// import {LOCATION_CHANGE } from 'react-router-redux';
const init = new Map({
  data: new List([
    Map({ uuid: uuid.v1(), Type: 'Executive', Name: 'Ann Brown', Title: 'CEO', Phone: '(512) 465 5555', Fax: '(512) 465 5555', Email: 'Executive' }),
    Map({ uuid: uuid.v1(), Type: 'Inmar AR', Name: 'Mary Smith', Title: 'Lorem Ipsum', Phone: '(512) 465 5555', Fax: '(512) 465 5555', Email: 'Inmar AR' }),
    Map({ uuid: uuid.v1(), Type: 'Executive', Name: 'John Doe', Title: 'Dolar Sit', Phone: '(512) 465 5555', Fax: '(512) 465 5555', Email: 'Executive' }),
    Map({ uuid: uuid.v1(), Type: 'Daily', Name: 'John Doe', Title: 'Dolar Sit amet', Phone: '(512) 465 5555', Fax: '(512) 465 5555', Email: 'Daily' }),
    Map({ uuid: uuid.v1(), Type: 'Other', Name: 'John Doe', Title: 'Lorem Ipsum', Phone: '(512) 465 5555', Fax: '(512) 465 5555', Email: 'Other' })
  ])
});

export default function reducer(state = init, action) {
  // console.log('in reducer---->', action);
  switch (action.type) {
  case 'SET_UUID':
    return state.set('uuid', action.payload.uuid);
  case 'DELETE_ROW':
    console.log('del row reducer', action.payload.uuid);
    
   let newData = state.getIn(['data']).filter( f=>{
        if (f.get('uuid') === action.payload.uuid){
          return false;
        } else {
          return true;
        }
    });
    return state.setIn(['data'], newData);
  default:
    return state;
  }
}