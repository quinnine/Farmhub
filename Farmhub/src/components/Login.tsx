import React from 'react';

const LoginForm: React.FC = () => {
    return (
        <div 
            className="d-flex justify-content-center align-items-center vh-100 w-100 position-relative"
            style={{
                backgroundImage: "url('/National Donations Platform.gif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <form className="login-form bg-light bg-opacity-50 p-4 rounded-4 shadow-lg">
                <h1 className="text-center mb-4">Login</h1>

                <div className="mb-3 position-relative">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        className="form-control ps-3 pe-5 rounded-pill bg-transparent text-white"
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
                        className="form-control ps-3 pe-5 rounded-pill bg-transparent text-white"
                        required
                    />
                    <i className="fa fa-lock position-absolute end-0 top-50 translate-middle-y me-3 text-dark"></i>
                </div>

                <div className="text-center mb-3">
                    <a href="#" className="text-dark">Forgot Password?</a>
                </div>

                <button type="submit" className="btn btn-warning w-50 rounded-pill d-block mx-auto">
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