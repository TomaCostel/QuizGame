import { Route, Routes } from "react-router-dom";
import React from "react";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";

export default function Router(){
    return <>
    <Routes>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/log-in" element={<LogIn/>}></Route>
    </Routes>
    </>
}