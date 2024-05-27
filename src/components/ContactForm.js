import React, { useState } from 'react';
import {Box, Button, Dialog, DialogContent, DialogTitle, InputLabel, TextField} from "@mui/material";
import usePost from "../hooks/usePost";
import './styles.scss';
import Loader from "./common/Loader";

const ContactInfo = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
    });

    const [open, setOpen] = useState(false);
    const {data, loading, error, postData} = usePost('/contact', formData);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const handleSubmit = async (e) => {
        try {

            e.preventDefault();
            await postData(formData);
            console.log("data", data);
            console.log("error", error);
            if (!data.ok) return <div>Error: {error.message}</div>;
        } catch (error) {
            if (error) return <div>Error: {error.message}</div>;

        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const isError = error ? error.message : [];

    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open Contact Form
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Contact Information</DialogTitle>
                <DialogContent>
            <form className="contact-form" onSubmit={handleSubmit}>
                <Box
                    component="div"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    validate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="first_name"
                            name="first_name"
                            label="First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            // required
                            id="last_name"
                            name="last_name"
                            label="Last Name"
                            value={formData.last_name}
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
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
            {error && <p>Error: {error.message}</p>}
            {data && <p>Response: {JSON.stringify(data)}</p>}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ContactInfo;
