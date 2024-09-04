import React from "react";
import { Box } from "@mui/material";
import SignUpBox from "./components/SignUpBox";

const SignUp = () => {
  const handleSignUp = (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repeatPassword: string
  ) => {
    console.log(
      `Handling signup in SignUp component. Name: ${firstName} ${lastName}, Email: ${email}, Password: ${password}, Repeat Password: ${repeatPassword}`
    );
    
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="70vh"  
    >
      <SignUpBox onSignUp={handleSignUp} />
    </Box>
  );
};

export default SignUp;
