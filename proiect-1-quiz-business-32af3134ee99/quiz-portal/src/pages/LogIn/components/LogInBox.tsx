// LogInBox.tsx
import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

interface LogInBoxProps {
  onLogin: (email: string, password: string) => void;
}

export default function LogInBox(props:LogInBoxProps){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    // Logic for handling login in LogInBox
    props.onLogin(email, password);
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
      <div
        style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}
      >
        Log In
      </div>
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
      <Button
        variant="contained"
        style={{ backgroundColor: "#FCC822", marginTop: "16px", width: "100%" }}
        color="primary"
        onClick={handleLogin}
      >
        Login
      </Button>

    </Box>
  );
};

