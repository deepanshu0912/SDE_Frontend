import React from 'react';
import './RegisterPage.css'; // Import the CSS file

const RegisterPage = () => {
    return (
        <div className="register-container">
            <div className="register-form">
                <h2 className="register-title">Register</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact:</label>
                        <input type="text" id="contact" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="register-button">Register</button>
                    <div className="login-link">
                        <p>
                            Already have an account? <a href="/login">Login here</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
