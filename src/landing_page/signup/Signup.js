import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
const notifySuccess = (msg) => toast.success(msg);
const notifyError = (msg) => toast.error(msg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data before submit:", form); // Debug line

    try {
      const res = await axios.post("http://localhost:8080/Signup", form, {
        withCredentials: true,
      });

      if (res.data.success) {
        notifySuccess("You have signed up!");
      setTimeout(() => {
        window.location.href = "http://localhost:3001/dashboard";
      }, 2000);
      } else {
         notifyError("Signup error");
      }
    } catch (err) {
      console.error("Signup error:", err);
       notifyError("Signup error");
    }
  };

  return (
    <div className="container">
      <div className="col-8 offset-3">
   <form onSubmit={handleSubmit} noValidate className="needs-validation">
     <h2>Sign Up</h2>
      <div className="mb-3">
          <label for="username" className="form-labels">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            className="form-control"
               value={form.username}
             onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-labels">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            className="form-control"
              value={form.email}
             onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-labels">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary">SignUp</button>
     </form>
      <ToastContainer position="top-right" autoClose={3000} />
       </div>
    </div>
  );
}

export default SignUp;
