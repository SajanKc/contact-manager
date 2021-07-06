import React from "react";
import { Paper, Card, CardContent, Typography, CardActions, IconButton, Avatar } from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import pp from "../images/pp250.png";

const ContactCard = (props) => {
	return (
		<div className="contact_item" key={props.index}>
			<Paper elevation={3}>
				<Card style={{ display: "flex", justifyContent: "space-between" }}>
					<CardContent style={{ display: "flex", alignItems: "center" }}>
						<Avatar className="avatar_image" alt="Sajan Kc" src={pp} />
						<div>
							<Typography variant="h6" color="textPrimary" component="h3">
								{props.contact.name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{props.contact.email}
							</Typography>
						</div>
					</CardContent>
					<CardActions>
						<IconButton aria-label="delete">
							<DeleteForeverOutlinedIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Paper>
		</div>
	);
};

export default ContactCard;
