import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css'; // Import your CSS file
import { AuthContext } from '../context/AuthContext';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext); 
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', { email, password });

        // Example API call for login (replace with your actual API endpoint)
        try {
            const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"email" :  email, "password" : password }),
            });

            if (response.ok) {
                const data = await response.json();
                login(data.access);
                
               
                window.location = ('/'); // Redirect to home page
            } else {
                // Handle errors if login fails
                const errorData = await response.json();
                console.error('Login error:', errorData);
                alert('Login failed: ' + errorData.detail); // Display error message
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <h1 className="headline">Welcome Back!</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
