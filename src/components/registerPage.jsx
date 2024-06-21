import React from 'react';
import '../assets/css/Auth.css';

function RegisterPage() {
    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Register</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
