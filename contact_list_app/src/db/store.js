import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

const initialState = {
    contact: []
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contact: [...state.contact, action.payload]
            }
        case 'DELETE_CONTACT':
            return {
                ...state,
                contact: state.contact.filter(contact => contact.id !== action.payload)
            }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contact: state.contact.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                )
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    contact: contactReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;