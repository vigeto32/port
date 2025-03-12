import React from "react"
import "./Signup.css"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="addUser">
      <h3>Sign Up</h3> 
      <form className="addUserForm">
        <div className="inputGroup">
        <label htmlFor="name">Username:</label>
        <input
        type="text"
        id="name"
        autoComplete="off"
        placeholder="Enter your Username"
        />
        <label htmlFor="email">Email:</label>
        <input
        type="email"
        id="email"
        autoComplete="off"
        placeholder="Enter your Email"
        />
        <label htmlFor="name">Password:</label>
        <input
        type="Password"
        id="password"
        autoComplete="off"
        placeholder="Enter your Password"
        />
        <button type="submit" class="btn btn-success">
          Sign Up
        </button>
        </div> 
      </form>
      <div className="login">
        <p>Already Have an Account ?</p>
        <Link to="/login" type="submit" class="btn btn-primary">
          Login
          </Link>
      </div>
    </div>
  )
}

export default Signup;