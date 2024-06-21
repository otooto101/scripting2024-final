import React from 'react';
import '../assets/css/Auth.css';

import GoogleIcon from '../assets/media/google.png';
import FacebookIcon from '../assets/media/facebook.png';

function LoginPage() {
    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <button type="submit">Login</button>
                    <div className="social-buttons">
                        <button className="google-button">
                            Sign in with Google{' '}
                            <img width="20px" src={GoogleIcon} alt="Google" />
                        </button>
                        <button className="facebook-button">
                            Sign in with Facebook{' '}
                            <img width="20px" src={FacebookIcon} alt="Facebook" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
