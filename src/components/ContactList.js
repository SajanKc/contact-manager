import React from "react";
import ContactCard from "./ContactCard";
import { Typography } from "@material-ui/core";

const ContactList = (props) => {
	return (
		<div className="container">
			<Typography variant="h4" color="textPrimary" component="h1">
				Contact List
			</Typography>
			{props.contacts.map((contact, index) => {
				return <ContactCard contact={contact} key={index} />;
			})}
		</div>
	);
};

export default ContactList;
