var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index.jsx');
var store = require('./store/configureStore.jsx').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log('New state', store.getState());

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
    }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Chris'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Dominique'));

store.dispatch(actions.addMovie('Pulp Fiction', 'Edgy'));
store.dispatch(actions.addMovie('Fight Club', 'Edgy'));
store.dispatch(actions.addMovie('Star Wars', 'Sci-Fi'));
store.dispatch(actions.removeMovie(1));
