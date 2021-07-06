import React from "react";
import { makeStyles, TextField, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {},
}));

export default function AddContact() {
	const classes = useStyles();

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<Grid container spacing={1}>
				<Grid item xs={12} sm={6}>
					<TextField id="contact_name" label="Name" variant="outlined" size="small" fullWidth />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField id="contact_email" label="Email" variant="outlined" size="small" fullWidth />
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" color="primary">
						Add Contact
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
