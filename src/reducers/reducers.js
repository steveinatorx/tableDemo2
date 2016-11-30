import { List, Map } from 'immutable';
// import {LOCATION_CHANGE } from 'react-router-redux';
const init = new Map({
  template: new List([
    {id: 'Type', format: 'String'},
    {id: 'Name', format: 'String'},
    {id: 'Title', format: 'String'},
    {id: 'Phone', format: 'phone'},
    {id: 'Ext', format: 'number'},
    {id: 'Fax', format: 'phone'},
    {id: 'Email', format: 'email'}
  ]),
  data: new List([
    Map({ Type: 'Executive', Name: 'Ann Brown', Title: 'CEO', Phone: '(512)465 5555', Fax: '(512)465 5555', Email: 'Executive' }),
    Map({ Type: 'Inmar AR', Name: 'Mary Smith', Title: 'Lorem Ipsum', Phone: '(512)465 5555', Fax: '(512)465 5555', Email: 'Inmar AR' }),
    Map({ Type: 'Executive', Name: 'John Doe', Title: 'Dolar Sit', Phone: '(512)465 5555', Fax: '(512)465 5555', Email: 'Executive' }),
    Map({ Type: 'Daily', Name: 'John Doe', Title: 'Dolar Sit amet', Phone: '(512)465 5555', Fax: '(512)465 5555', Email: 'Daily' }),
    Map({ Type: 'Other', Name: 'John Doe', Title: 'Lorem Ipsum', Phone: '(512)465 5555', Fax: '(512)465 5555', Email: 'Other' })
  ])
});

export default function reducer(state = init, action) {
  // console.log('in reducer---->', action);
  switch (action.type) {
  case 'SET_UUID':
    return state.set('uuid', action.payload.uuid);
  default:
    return state;
  }
}