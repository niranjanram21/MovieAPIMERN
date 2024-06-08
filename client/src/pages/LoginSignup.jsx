// src/pages/LoginSignup.jsx
import React, { useState } from 'react';
import './Loginsignup.css';
import { signUp, login } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [state, setState] = useState('Sign Up');
  const [formValues, setFormValues] = useState(['', '', '']); // [email, password, username]
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const [email, password, username] = formValues;

    // Basic form validation
    if (!email || !password || (state === 'Sign Up' && !username)) {
      setError('All fields are required');
      return;
    }

    setLoading(true);

    try {
      if (state === 'Sign Up') {
        await signUp(email, password);
        alert('Sign Up successful!');
        setState('Login');
      } else {
        await login(email, password);
        alert('Login successful!');
        navigate('/home');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (index, value) => {
    const newValues = [...formValues];
    newValues[index] = value;
    setFormValues(newValues);
  };

  return (
    <div className="login-container">
      <div className="bg-black bg-opacity-70 py-2 sm:py-8 lg:py-6 lg:w-1/3">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-4 ">
          <h2 className="my-2 text-center text-2xl font-bold text-gray-100 md:mb-8 lg:text-3xl">{state}</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="mx-auto max-w-lg border-gray-600">
            <div className="flex flex-col gap-8 p-4 md:p-8">
              {state === "Sign Up" && (
                <div>
                  <input
                    placeholder='Enter your Username'
                    name="username"
                    value={formValues[2]}
                    onChange={(e) => handleChange(2, e.target.value)}
                    className="w-full rounded-md border bg-black bg-opacity-90 px-3 py-2 text-gray-50 outline-none ring-red-500 transition duration-100 focus:ring"
                  />
                </div>
              )}
              <div>
                <input
                  placeholder='Enter your email'
                  name="email"
                  value={formValues[0]}
                  onChange={(e) => handleChange(0, e.target.value)}
                  className="w-full rounded-md border bg-black bg-opacity-90 px-3 py-2 text-gray-50 outline-none ring-red-500 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <input
                  placeholder='Enter your password'
                  type='password'
                  name="password"
                  value={formValues[1]}
                  onChange={(e) => handleChange(1, e.target.value)}
                  className="w-full rounded-md border bg-black bg-opacity-90 px-3 py-2 text-gray-50 outline-none ring-red-500 transition duration-100 focus:ring"
                />
              </div>
              <button type="submit" className="mt-4 block bg-red-600 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-700 focus-visible:ring active:bg-red-600 md:text-base">
                {loading ? 'Loading...' : (state === "Sign Up" ? "Sign Up" : "Log in")}
              </button>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-4">
              {state === "Sign Up" ? (
                <p onClick={() => setState("Login")} className="text-center text-sm text-gray-400">
                  Already have an account? <span className="text-red-500 transition duration-100 hover:text-red-600 active:text-red-700 hover:cursor-pointer">Login</span>
                </p>
              ) : (
                <p onClick={() => setState("Sign Up")} className="text-center text-sm text-gray-400">
                  Don&apos;t have an account? <span className="text-red-500 transition duration-100 hover:text-red-600 active:text-red-700 hover:cursor-pointer">Register</span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
