import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const initialState = {
    contact: []
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contact: [...state.contact, { ...action.payload, id: state.contact.length ? state.contact[state.contact.length - 1].id + 1 : 1 }]
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
    reducer: rootReducer
});

export default store;