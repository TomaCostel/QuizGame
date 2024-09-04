import React from "react";
import { Box } from "@mui/material";
import LogInBox from "./components/LogInBox";

export default function LogIn(){
  const handleLogin = (email: string, password: string) => {
    console.log(
      `Handling login in LogIn component. Email: ${email}, Password: ${password}`
    );
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="70vh"  
    >
      <LogInBox onLogin={handleLogin} />
    </Box>
  );
};