import { EventTypes } from 'redux-segment';
// var __CONFIG__ = require('__CONFIG__');

export const SET_UUID = 'SET_UUID';
export function setUUID(theUuid) {
  console.log('in setUUID');
  return {
    type: SET_UUID,
    payload: {
      uuid: theUuid
    },
    // segment metadata int
    meta: {
      analytics: EventTypes.track
    }
  };
}

export const TOGGLE_CHECK = 'TOGGLE_CHECK';
export function toggleCheck(theUuid) {
  return {
    type: TOGGLE_CHECK,
    payload: {
      uuid: theUuid
    }
    // segment metadata int
    /*meta: {
      analytics: EventTypes.track
    }*/
  };
}

export const DELETE_ROWS = 'DELETE_ROWS';
export function deleteRows() {
  return {
    type: DELETE_ROWS
    // segment metadata int
    /*meta: {
      analytics: EventTypes.track
    }*/
  };
}

export const ADD_ROW = 'ADD_ROW';
export function addRow(row) {
  return {
    type: ADD_ROW,
    payload: {
      row: row
    }
    // segment metadata int
    /*meta: {
      analytics: EventTypes.track
    }*/
  };
}

// thunk
/*
export function getUUID() {
  if (!cookie.load('helloWorld')) {
    console.log('no cookie found - get uuid and set cookie and state uuid');
      /* return dispatch =>
        axios.get( __CONFIG__.apiHost + '/api/uuid').then(res => {
            dispatch(receiveUUID(res.data));
          }).catch(err => {
            dispatch(apiError(err));
          });
    } else {
       return dispatch => (setUUID(cookie.load('helloWorld', { path: '/' })));
    }
    cookie.save('helloWorld', uuid, { path: '/' });
  }
  return dispatch(setUUID(uuid));
}*/
