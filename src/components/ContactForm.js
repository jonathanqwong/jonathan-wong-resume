import React, { useState } from "react";
import {
	Box,
	Button,
	Dialog, DialogActions,
	DialogContent,
	DialogTitle, IconButton,
	InputLabel, Snackbar,
	TextField,
} from "@mui/material";
import usePost from "../hooks/usePost";
import "./styles.scss";
import Loader from "./common/Loader";
import * as PropTypes from "prop-types";

function CloseIcon(props) {
	return null;
}

CloseIcon.propTypes = { fontSize: PropTypes.string };
const ContactInfo = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [open, setOpen] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState("");
	const { data, loading, error, postData } = usePost("/contact");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// handle open, close, and submit for dialog
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let response = await postData(formData);
			if (response.data) {
				setSnackbarMessage("Message Sent!");
				setOpen(false); // Close dialog on success
			} else if (response.error) {
				let error = JSON.parse(response?.error?.response?.request?.response);
				let errorMsg = error?.errors[0].msg;
				setSnackbarMessage("Something went wrong: \n" + errorMsg);
			}
		} catch (err) {
			setSnackbarMessage("Something went wrong: \n" + err.message);
		} finally {
			setSnackbarOpen(true);
		}
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// handle open, close, and submit for snackbar (toast)
	const handleOpenSnackbar = () => {
		setSnackbarOpen(true);
	};
	const handleCloseSnackbar = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackbarOpen(false);
	};

	const action = (
		<React.Fragment>
			<Button color="secondary" size="small" onClick={handleCloseSnackbar}>
				Close
			</Button>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleCloseSnackbar}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	return (
		<>
			<div>
				<Button
					className="contact-form-button"
					variant="outlined"
					color="primary"
					onClick={handleOpen}
				>
					Contact Me!
				</Button>
			</div>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Contact Information</DialogTitle>
				<DialogContent>
					{/*<form className="contact-form">*/}
					<form className="contact-form" onSubmit={handleSubmit}>
						<Box
							component="div"
							sx={{ "& .MuiTextField-root": { m: 1, width: "auto" } }}
							autoComplete="off"
						>
							<div>
								<TextField
									required
									id="name"
									name="name"
									label="Name"
									value={formData.name}
									onChange={handleChange}
								/>
							</div>
							<div>
								<TextField
									required
									id="email"
									name="email"
									label="Email"
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
							<div>
								<TextField
									required
									multiline
									rows={10}
									id="message"
									name="message"
									label="Message"
									value={formData.message}
									onChange={handleChange}
								/>
							</div>
						</Box>
						<DialogActions>
							<Button onClick={handleClose} color="primary">
								Cancel
							</Button>
							<Button onClick={handleSubmit} type="submit" variant="contained" color="primary">
								Submit
							</Button>
						</DialogActions>
					</form>
					{/*{loading && <Loader />}*/}
				</DialogContent>
			</Dialog>

			<Snackbar
				open={snackbarOpen}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				message={snackbarMessage}
				action={action}
			/>
		</>
	);
};

export default ContactInfo;
