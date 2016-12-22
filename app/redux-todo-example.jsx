var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
}
var reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            state = {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('searchText is', state.name);
    document.getElementById('app').innerHTML = state.searchText;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'dog'
});
store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'walk'
});
store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'work'
});
console.log('searchText should be "dog" ', store.getState());
