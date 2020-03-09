import ticketListReducer from './../../src/reducers/general-journal-reducer';


describe ('generalJournalReducer', () => {
  test('Should return default state if no action type is recognized', () => {
   expect(generalJournalReducer({}, {type: null})).toEqual({});
 });
});
