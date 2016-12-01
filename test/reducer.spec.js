import reducer from '../src/reducers/reducers';
import * as actions from '../src/actions';

let chai = require('chai');
let chaiImmutable = require('chai-immutable');

chai.use(chaiImmutable);
let List = require('immutable').List;

let should = chai.should()
  , expect = chai.expect;

describe('TableDemo reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.have.property('data')
    .to.have.sizeOf(5)
    .that.is.an.instanceof(Object)   
    
  })

  it('should handle ADD_ROW', () => {
    expect(
      reducer(undefined, {
        type: actions.ADD_ROW,
        payload: { row: { Name:'foo', Title: 'bar'}}
      })
    ).to.have.property('data')
    .to.have.sizeOf(6)
    
  })
})