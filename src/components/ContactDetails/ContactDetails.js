import React from 'react';

const ContactDetails = ({ name, number }) => {
	return (
		<dl>
			<div>
				<dt>Contact name</dt>
				<dd>{name}</dd>
			</div>
			<div>
				<dt>Phone number</dt>
				<dd>{number}</dd>
			</div>
		</dl>
	);
};

export default ContactDetails;