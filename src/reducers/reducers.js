import { List, Map } from 'immutable';
let uuid = require('node-uuid');
const init = new Map({
  data: new List([
    Map({ check: false, uuid: uuid.v1(), Type: 'Executive', Name: 'Ann Brown', Title: 'CEO', Phone: '(512) 465 5555', Fax: '(512) 465 5555', Email: 'Executive' }),
    Map({ check: false, uuid: uuid.v1(), Type: 'Inmar AR', Name: 'Mary Smith', Title: 'Lorem Ipsum', Phone: '(512) 465 5555', Fax: '(512) 465 5555', Email: 'Inmar AR' }),
    Map({ check: false, uuid: uuid.v1(), Type: 'Executive', Name: 'John Doe', Title: 'Dolar Sit', Phone: '(512) 465 5555', Fax: '(512) 465 5555', Email: 'Executive' }),
    Map({ check: false, uuid: uuid.v1(), Type: 'Daily', Name: 'John Doe', Title: 'Dolar Sit amet', Phone: '(512) 465 5555', Fax: '(512) 465 5555', Email: 'Daily' }),
    Map({ check: false, uuid: uuid.v1(), Type: 'Other', Name: 'John Doe', Title: 'Lorem Ipsum', Phone: '(512) 465 5555', Fax: '(512) 465 5555', Email: 'Other' })
  ])
});

export default function reducer(state = init, action) {
  // console.log('in reducer---->', action);
  switch (action.type) {
  case 'SET_UUID':
    return state.set('uuid', action.payload.uuid);
  case 'DELETE_ROWS':
    console.log('i had->', state.getIn(['data']));
    let newDeleteData = state.getIn(['data']).filter(f=>{
      return (!f.get('check'));
    });
    return state.setIn(['data'], newDeleteData);
  case 'TOGGLE_CHECK':
    console.log('tctc', action.payload.uuid);
    let newToggleData = state.getIn(['data']).map(f => {
      if (f.get('uuid') === action.payload.uuid) {
        return f.update('check', check => !check);
      }
      return f;
    });
    return state.setIn(['data'], newToggleData);
  case 'ADD_ROW':
    console.log(action.payload.row);
    let row = action.payload.row;
    row.uuid = uuid.v1();
    row.check = false;
    let newRowData = state.getIn(['data']).push(new Map(action.payload.row));
    return state.setIn(['data'], newRowData);
  default:
    return state;
  }
}