import { useState } from "react";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
//import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { startTransition } from 'react';
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = ({GenerateToken}) =>
{
    const [optCode, setCode] = useState();

    
    return  <Container component="main" maxWidth="xs">
    <Form
      className="GenerateToken"
      onSubmit={e => {
        e.preventDefault();
        GenerateToken(optCode);
      }} 
    >
      <Box component="form" 
           onSubmit={GenerateToken} 
           noValidate 
           sx={{ marginTop: 20  , display: 'flex' , flexDirection:'column' }}>
        <TextField
          margin="normal"
          required
          placeholder="Code"
          fullWidth
          id="code"
          label="Code"
          name="Code"
          autoComplete="Code"
          autoFocus
          onChange={(e) => setCode(e.target.value)}
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!optCode}
          sx={{ marginTop: 2, marginBottom : 2 , display: "flex" }}
        >
          Login
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
             Change PhoneNumber
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>

    </Form>
  </Container>
}