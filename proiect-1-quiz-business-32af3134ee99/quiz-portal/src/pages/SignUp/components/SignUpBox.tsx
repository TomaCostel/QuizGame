import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";

interface SignUpBoxProps {
  onSignUp: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repeatPassword: string
  ) => void;
}

const SignUpBox: React.FC<SignUpBoxProps> = ({ onSignUp }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSignUp = () => {
    console.log(`Name: ${firstName} ${lastName}, Email: ${email}, Password: ${password}, Repeat Password: ${repeatPassword}`);
  
    onSignUp(firstName, lastName, email, password, repeatPassword);
  };

  return (
    <Box
      sx={{
        width: 400,
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 4,
        textAlign: "center", 
        fontFamily: "'Actor', sans-serif", 
      }}
    >
      <div style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}>
        Sign Up
      </div>
      <TextField
        label="First Name"
        fullWidth
        margin="normal"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Repeat Password"
        type="password"
        fullWidth
        margin="normal"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "#FCC822", marginTop: "16px", width: "100%" }}
        color="primary"
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUpBox;
