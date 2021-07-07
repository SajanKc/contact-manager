import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import uuid from "react-uuid";

export default function AddContact({ addContactHandler }) {
	const [username, setUserName] = React.useState("");
	const [useremail, setUserEmail] = React.useState("");

	const details = {
		id: uuid(),
		name: username,
		email: useremail,
	};

	const usernameHandler = (e) => {
		let providedName = e.target.value;
		setUserName(toTitleCase(providedName));
	};

	const toTitleCase = (phrase) => {
		return phrase
			.toLowerCase()
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	const useremailHandler = (e) => {
		setUserEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (username === "" && useremail === "") {
			alert("All field required!!!");
			return;
		}
		addContactHandler(details);
		setUserName("");
		setUserEmail("");
	};

	return (
		<form noValidate autoComplete="off" onSubmit={handleSubmit}>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6}>
					<TextField
						id="contact_name"
						label="Name"
						variant="outlined"
						size="small"
						fullWidth
						value={username}
						onChange={usernameHandler}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id="contact_email"
						label="Email"
						variant="outlined"
						size="small"
						fullWidth
						value={useremail}
						onChange={useremailHandler}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button type="submit" variant="contained" color="primary">
						Add Contact
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
