import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <input type="email" name="Email" id="" />
      <br />
      <input type="password" name="" id="" />
      <br />
      <input type="submit" value="Submit" />
      <br />
      <Link to="/login">Already User?</Link>
    </div>
  );
};

export default Register;
