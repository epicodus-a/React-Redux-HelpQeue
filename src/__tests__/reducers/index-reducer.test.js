
import rootReducer from './../../src/reducers/index';
import selectedTicketReducer from '../../src/reducers/selectedTicketReducer';
import ticketListReducer from '../../src/reducers/ticket-list-reducer';
import { createStore } from 'redux';


let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('it should return default state if no aciton is recognize', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      selectedTicket: {},
      masterTicketList: {}
    });
  });

  test('Should contain ticketListReducer logic', () => {
    expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });

  test('Should contain selectedTicketReducer logic', () => {
    expect(store.getState().selectedTicket).toEqual(selectedTicketReducer(undefined, { type: null }));
  });

});