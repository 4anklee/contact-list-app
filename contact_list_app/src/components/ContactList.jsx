import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../db/contactActions.js';

const ContactList = () => {
    const contacts = useSelector(state => state.contact.contact);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(null);
    const [updatedContact, setUpdatedContact] = useState({});

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    }

    const startEditing = (contact) => {
        setEditMode(contact.id);
        setUpdatedContact(contact);
    }

    const saveContact = () => {
        dispatch(updateContact(updatedContact));
        setEditMode(null);
    }

    const handleChange = (e) => {
        setUpdatedContact({
            ...updatedContact,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <>
            <table border="2" className="contact-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>
                            {editMode === contact.id ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={updatedContact.name}
                                    onChange={handleChange}
                                />
                            ) : (
                                contact.name
                            )}
                        </td>
                        <td>
                            {editMode === contact.id ? (
                                <input
                                    type="text"
                                    name="address"
                                    value={updatedContact.address}
                                    onChange={handleChange}
                                />
                            ) : (
                                contact.address
                            )}
                        </td>
                        <td>
                            {editMode === contact.id ? (
                                <input
                                    type="text"
                                    name="phone"
                                    value={updatedContact.phone}
                                    onChange={handleChange}
                                />
                            ) : (
                                contact.phone
                            )}
                        </td>
                        <td>
                            {editMode === contact.id ? (
                                <input
                                    type="text"
                                    name="email"
                                    value={updatedContact.email}
                                    onChange={handleChange}
                                />
                            ) : (
                                contact.email
                            )}
                        </td>
                        <td>
                            {editMode === contact.id ? (
                                <input
                                    type="text"
                                    name="category"
                                    value={updatedContact.category}
                                    onChange={handleChange}
                                />
                            ) : (
                                contact.category
                            )}
                        </td>
                        <td>
                            {editMode === contact.id ? (
                                <button onClick={saveContact}>OK</button>
                            ) : (
                                <button onClick={() => startEditing(contact)}>Update</button>
                            )}
                            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default ContactList;
