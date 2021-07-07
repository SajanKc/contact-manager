import React from "react";
import { Paper, Card, CardContent, Typography, CardActions, IconButton, Avatar } from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const ContactCard = ({ contact, clickHandler }) => {
	let avatarName = "";
	let newName = contact.name.split(" ");
	newName.forEach((un) => {
		avatarName += un.charAt(0);
	});

	return (
		<div className="contact_item">
			<Paper elevation={3}>
				<Card style={{ display: "flex", justifyContent: "space-between" }}>
					<CardContent style={{ display: "flex", alignItems: "center" }}>
						<Avatar className="avatar_image">{avatarName}</Avatar>
						<div>
							<Typography variant="h6" color="textPrimary" component="h3">
								{contact.name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{contact.email}
							</Typography>
						</div>
					</CardContent>
					<CardActions>
						<IconButton
							aria-label="delete"
							onClick={() => clickHandler(contact.id)}
							className="delete_button"
						>
							<DeleteForeverOutlinedIcon className="delete_btn_icon" />
						</IconButton>
					</CardActions>
				</Card>
			</Paper>
		</div>
	);
};

export default ContactCard;
