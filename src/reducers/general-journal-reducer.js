export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_JOURNAL':
    const { date, journalEntry, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        date: date,
        journalEntry: journalEntry,
        id: id
      }
    });
    return newState;
  default:
    return state;
};
}
