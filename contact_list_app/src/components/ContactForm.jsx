import {useState} from "react";
import {useDispatch} from "react-redux";
import StateSelector from "./StateSelector.jsx";

const ContactForm = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
        category: ""
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        let formErrors = {};

        if (!nameValidation(formData.name)) {
            formErrors.name = "Name is required.";
        }

        if (!addressValidation(formData.address, formData.state, formData.zip)) {
            formErrors.address = "Complete address is required.";
        }

        if (!phoneValidation(formData.phone)) {
            formErrors.phone = "Phone number must be 10 digits.";
        }

        if (!emailValidation(formData.email)) {
            formErrors.email = "Valid email is required.";
        }

        if (!categoryValidation(formData.category)) {
            formErrors.category = "Category is required.";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const addContact = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newContact = {
                name: formData.name,
                address: `${formData.address} ${formData.state} ${formData.zip}`,
                phone: formData.phone,
                email: formData.email,
                category: formData.category,
            };

            dispatch({type: 'ADD_CONTACT', payload: newContact});

            setFormData({
                name: "",
                address: "",
                state: "",
                zip: "",
                phone: "",
                email: "",
                category: ""
            });

            setErrors({});
        }
    };

    const nameValidation = (name) => {
        return name !== "";
    };

    const addressValidation = (address, state, zip) => {
        return address !== "" && state !== "" && zip !== "";
    };

    const phoneValidation = (phone) => {
        return phone.length === 10;
    };

    const emailValidation = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const categoryValidation = (category) => {
        return category !== "";
    };

    return (
        <div>
            <h1>Contact List</h1>
            <form onSubmit={addContact}>
                <ul>
                    <label>
                        Name<br/>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                    <br/>

                    <label>
                        Address<br/>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                        <StateSelector
                            name="state"
                            value={formData.state}
                            onChange={e => handleInputChange(e)}
                        />
                        <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                        />
                    </label>
                    {errors.address && <p style={{color: "red"}}>{errors.address}</p>}
                    <br/>

                    <label>
                        Phone<br/>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </label>
                    {errors.phone && <p style={{color: "red"}}>{errors.phone}</p>}
                    <br/>

                    <label>
                        Email<br/>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </label>
                    {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                    <br/>

                    <label>
                        Category<br/>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                        />
                    </label>
                    {errors.category && <p style={{color: "red"}}>{errors.category}</p>}

                    <br/>
                    <button type="submit">Add Contact</button>
                </ul>
            </form>
        </div>
    );
};

export default ContactForm;
