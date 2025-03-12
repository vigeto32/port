import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset error message before making a request
        
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: userEmail, password: password }),
            });
            
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }
            console.log("Login successful", data);
            // Handle successful login (e.g., navigate to home, store token, etc.)
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="addUser">
            <h3>Sign In</h3>
            {error && <p className="error-message">{error}</p>}
            <form className="addUserForm" onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        autoComplete="off"
                        placeholder="Enter your Email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </div>
            </form>
            <div className="login">
                <p>Don't have an account?</p>
                <Link to="/signup" className="btn btn-success">
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default Login;
