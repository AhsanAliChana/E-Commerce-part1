import { Button, TextField, Typography } from "@mui/material";
import React from "react";

const SignIn = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Sign in to E-Store
            </Typography>
            <Typography variant="body2" paragraph>
                Welcome back to E-Store! Enter your email to get started.
            </Typography>

            <TextField
                label="Email"
                placeholder="Enter your email"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Password"
                type="password"
                placeholder="Enter your password"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <Button
                variant="contained"
                color="primary"
                fullWidth
            >
                Sign In
            </Button>
        </div>
    );
};

export default SignIn;
