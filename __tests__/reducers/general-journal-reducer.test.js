import ticketListReducer from './../../src/reducers/general-journal-reducer';


describe ('generalJournalReducer', () => {
  let action;
  const sampleJournalData = {
    date: '1/2/19',
    journalEntry: 'lots of lorem impsum here',
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
   expect(generalJournalReducer({}, {type: null})).toEqual({});
 });



});
