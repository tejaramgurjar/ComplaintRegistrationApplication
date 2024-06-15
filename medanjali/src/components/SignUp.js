import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        toast.success(data.message);
        setError(null);

        // Reset form fields
        setUsername('');
        setPassword('');
      } else {
        setError(data.message);
        toast.error(data.message);
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error registering user. Please try again later.');
      toast.error('Error registering user. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <section className="m-2">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card bg-dark text-white" style={{ borderRadius: '2rem' }}>
                <div className="card-body p-5">
                  <h2 className="text-center mb-5">Sign Up</h2>
                  <form onSubmit={handleSignUp}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="username"
                        className="form-control form-control-lg"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <label className="form-label" htmlFor="username">
                        Your Username
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>
                    {error && (
                      <div className="alert alert-danger mt-3" role="alert">
                        {error}
                      </div>
                    )}
                    {successMessage && (
                      <div className="alert alert-success mt-3" role="alert">
                        {successMessage}
                      </div>
                    )}
                    <p className="text-center mt-5 mb-0">
                      Have already an account?{' '}
                      <Link to="/" className="fw-bold text-body">
                        <u style={{ color: '#989090' }}>Login here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </section>
  );
}

export default SignUp;
