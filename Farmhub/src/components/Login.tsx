import React from 'react';

const LoginForm: React.FC = () => {
    return (
        <div 
            className="d-flex justify-content-center align-items-center vh-100 w-100 position-relative"
            style={{
                backgroundImage: "url('plants-green-nature-leaves-photography-2117193-wallhere.com.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <form 
                className="login-form bg-light bg-opacity-25 p-5 rounded-4 shadow-lg"
                style={{ maxWidth: '450px', width: '90%' }}
            >
                <h1 className="text-center mb-4" style={{ fontSize: '2.5rem' }}>Login</h1>

                <div className="mb-3 position-relative">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        className="form-control ps-3 pe-5 rounded-pill bg-transparent text-white py-3"
                        required
                    />
                    <i className="fa fa-user position-absolute end-0 top-50 translate-middle-y me-3 text-dark"></i>
                </div>

                <div className="mb-3 position-relative">    
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="form-control ps-3 pe-5 rounded-pill bg-transparent text-white py-3"
                        required
                    />
                    <i className="fa fa-lock position-absolute end-0 top-50 translate-middle-y me-3 text-dark"></i>
                </div>

                <div className="text-center mb-3">
                    <a href="#" className="text-dark">Forgot Password?</a>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-success w-50 rounded-pill d-block mx-auto py-3"
                    style={{ fontSize: '1.2rem' }}
                >
                    Login
                </button>

                <div className="text-center mt-3">
                    <p className="text-dark">
                        Don't have an account? <a href="#" className="fw-bold text-primary">Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;