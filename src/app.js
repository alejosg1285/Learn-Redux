'use strict';

import { createStore } from 'redux';

//Define reducer
const reducer = (state = {books:[]}, action) => {
    switch(action.type) {
        case 'POST_BOOK':
            /* let books = state.books.concat(action.payload);
            return {books}; */
            return {books:[...state.books, ...action.payload]}
            break;
    }

    return state;
}

//Create the store
const store = createStore(reducer);

store.subscribe(() => {
    console.log('current state is:', store.getState());
    //console.log('current state price is:', store.getState()[1].price);
});

//Create and dispatch actions.
store.dispatch({
    type: 'POST_BOOK',
    payload: [{
        id: 1,
        title: 'the test book',
        description: 'the test book´s description',
        price: 33.33
    }, {
        id: 2,
        title: 'the second test book',
        description: 'the second test book´s description',
        price: 63.33
    }]
});

// Create another dispatch
store.dispatch({
    type: 'POST_BOOK',
    payload: [{
        id: 3,
        title: 'the third test book',
        description: 'the third test book´s description',
        price: 63.33
    }]
});