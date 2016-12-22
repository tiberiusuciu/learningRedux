var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
    // console.log('New action ', action);

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            }
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            }
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

    // console.log('Name is', state.name);
    console.log('New state', store.getState());
    document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Chris'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Dominique'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Pulp fiction',
    genre: 'edgy'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Fight club',
    genre: 'edgy'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Star Wars',
    genre: 'sci-fi'
});
