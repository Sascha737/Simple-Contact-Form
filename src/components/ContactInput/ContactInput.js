import React, { useState } from 'react';
import ContactDetails from '../ContactDetails/ContactDetails';

const ContactInput = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [contactAdded, setContactAdded] = useState(false);
    const [cleared, setCleared] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }

        setContactAdded(false);
        setCleared(false);
    };

    const validate = () => {
        const newErrors = {};

        // Names allow letters and spaces; phone numbers require 10 to 15 digits.
        const namePattern = /^[A-Za-z\s]{3,}$/;
        if (!name) {
            newErrors.name = 'Name is required';
        } else if (!namePattern.test(name)) {
            newErrors.name = 'Name must be at least 3 characters and contain only letters';
        }

        const phonePattern = /^\d{10,15}$/;
        if (!number) {
            newErrors.number = 'Phone number is required';
        } else if (!phonePattern.test(number)) {
            newErrors.number = 'Phone number must contain only digits and be 10-15 digits long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const addContactDetails = (event) => {
        event.preventDefault();
        setCleared(false);
        if (validate()) {
            setContactAdded(true);
        }
    };

    const clearContactDetails = () => {
        setName('');
        setNumber('');
        setErrors({});
        setContactAdded(false);
        setCleared(true);
    };

    return (
        <section className="container">
            <h1>Contact details</h1>
            <form className="contact-form" onSubmit={addContactDetails} noValidate>
                <label htmlFor="contact-name">
                    Name
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </label>
                <label htmlFor="contact-number">
                    Phone number
                    <input
                        id="contact-number"
                        type="tel"
                        name="number"
                        inputMode="numeric"
                        autoComplete="tel"
                        value={number}
                        onChange={handleChange}
                    />
                    {errors.number && <span className="error">{errors.number}</span>}
                </label>
                <div className="form-actions">
                    <button type="submit">Add contact</button>
                    <button type="button" className="clear-button" onClick={clearContactDetails}>
                        Clear
                    </button>
                </div>
            </form>
            {cleared && (
                <p className="cleared-message" role="status">
                    Contact details cleared.
                </p>
            )}
            {contactAdded && (
                <div className="contact-details">
                    <ContactDetails name={name} number={number} />
                </div>
            )}
        </section>
    );
};

export default ContactInput;