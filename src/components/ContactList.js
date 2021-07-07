import React from "react";
import ContactCard from "./ContactCard";
import { Typography } from "@material-ui/core";

const ContactList = ({ contacts, getContactId }) => {
	const deleteContactHandler = (id) => {
		if (window.confirm("Are you sure want to delete ?")) getContactId(id);
	};
	return (
		<div className="container">
			<Typography variant="h4" color="textPrimary" component="h1">
				Contact List
			</Typography>
			{contacts.map((contact, index) => {
				return <ContactCard contact={contact} key={index} clickHandler={deleteContactHandler} />;
			})}
		</div>
	);
};

export default ContactList;
