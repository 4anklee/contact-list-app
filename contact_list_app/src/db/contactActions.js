import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import db from './firebase.js';

export const addContact = (contactData) => async (dispatch) => {
    try {
        const docRef = await addDoc(collection(db, 'contacts'), contactData);
        dispatch({
            type: 'ADD_CONTACT',
            payload: { ...contactData, id: docRef.id },
        });
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};

export const deleteContact = (contactId) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, 'contacts', contactId));
        dispatch({
            type: 'DELETE_CONTACT',
            payload: contactId,
        });
    } catch (error) {
        console.error('Error deleting document: ', error);
    }
};

export const updateContact = (contactData) => async (dispatch) => {
    try {
        const contactRef = doc(db, 'contacts', contactData.id);
        await updateDoc(contactRef, contactData);
        dispatch({
            type: 'UPDATE_CONTACT',
            payload: contactData,
        });
    } catch (error) {
        console.error('Error updating document: ', error);
    }
};
