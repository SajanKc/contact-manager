import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { Container } from "@material-ui/core";

function App() {
	const contacts = [
		{
			id: "1",
			name: "Sajan KC",
			email: "sazankce@gmail.com",
		},
		{
			id: "2",
			name: "Muna Tamang",
			email: "munatamang@gmail.com",
		},
	];
	return (
		<>
			<Header />
			<Container>
				<AddContact />
				<ContactList contacts={contacts} />
			</Container>
		</>
	);
}

export default App;
