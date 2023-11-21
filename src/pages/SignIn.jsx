import React from "react";
import LoginForm from "../components/auth/LoginForm";
import "./styles/SignIn.css"

const SignIn = () => {
    return (
        <main className="main">
            <h1>Sign in</h1>
            <p>Welcome back</p>
            <LoginForm />
        </main>
    );
}

export default SignIn;