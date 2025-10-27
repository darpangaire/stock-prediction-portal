import React from 'react'
import { useState ,useContext} from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {useNavigate}  from 'react-router-dom'
import {AuthContext} from '../AuthProvider';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);



  const [error, setError] = useState({});
  const [success, setSuccess] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    

    // If there was an error for this field, remove it when user starts typing
    if (error[name]) {
      const updatedErrors = { ...error };
      delete updatedErrors[name];
      setError(updatedErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    setSuccess(null);
    setLoading(true)
    

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/token/",
        formData
      );
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh) 
      console.log('logging successfull')

      
      setIsLoggedIn(true)
      navigate("/")
    } catch (err) {
      console.log("Registration error:", err.response?.data);
      if (err.response?.data) {
        setError(err.response.data);
      } else {
        setError({ general: "Something went wrong. Please try again." });
      }
    }finally{
      setLoading(false)
    }
  };

  // Renders errors properly (supports object or string)
  const renderErrors = () => {
    if (!error || Object.keys(error).length === 0) return null;

    if (typeof error === "string") return <p>{error}</p>;

    return Object.entries(error).map(([field, messages]) => (
      <p key={field}>
        <strong>{field}:</strong>{" "}
        {Array.isArray(messages) ? messages.join(", ") : String(messages)}
      </p>
    ));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-secondary p-4 rounded shadow">
          <h3 className="text-light text-center mb-4">Create an Account</h3>

          {/* Global Error */}
          {Object.keys(error).length > 0 && (
            <div className="alert alert-danger text-start" role="alert">
              {renderErrors()}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="alert alert-success text-center">{success}</div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-light">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter username"
                required
                onChange={handleChange}
                value={formData.username}
              />
              {error.username && (
                <small className="text-danger">{error.username[0]}</small>
              )}
            </div>

            

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                required
                onChange={handleChange}
                value={formData.password}
              />
              {error.password && (
                <small className="text-danger">{error.password[0]}</small>
              )}
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              {loading ? (
                <button type="submit" className="btn btn-primary" disabled><FontAwesomeIcon icon={faSpinner} spin></FontAwesomeIcon >Please Wait...</button>
              ):(
              <button type="submit" className="btn btn-primary">Login</button>)}
              
               
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
