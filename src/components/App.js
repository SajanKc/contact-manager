import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { Container } from "@material-ui/core";

function App() {
	const LOCAL_STORAGE_KEY = "contacts";
	const [contacts, setContacts] = React.useState([]);

	const addContactHandler = (contact) => {
		setContacts([...contacts, contact]);
	};

	const removeContactHandler = (id) => {
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		if (newContactList) setContacts(newContactList);
	};

	React.useEffect(() => {
		const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (retrivedContacts) setContacts(retrivedContacts);
	}, []);

	React.useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<>
			<Header />
			<Container>
				<AddContact addContactHandler={addContactHandler} />
				<ContactList contacts={contacts} getContactId={removeContactHandler} />
			</Container>
		</>
	);
}

export default App;
