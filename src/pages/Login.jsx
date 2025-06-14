import React from 'react'
import { useState } from 'react';
//import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [resetError, setResetError] = useState('');

  // Get redirect path from location state or default to home
  const from = location.state?.from?.pathname || '/dashboard';

  const onSubmit = async (data) => {
    try {
      setError('');
      setLoading(true);
      await login(data.email, data.password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to sign in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    const email = getValues('email');
    
    if (!email) {
      setResetError('Please enter your email address above');
      return;
    }

    try {
      setResetError('');
      setLoading(true);
      await resetPassword(email);
      setResetSent(true);
    } catch (error) {
      console.error('Password reset error:', error);
      setResetError('Failed to send password reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
        <title>Login | DeutschAkademie - German Language School</title>
        <meta name="description" content="Log in to your DeutschAkademie student account to access your courses, track your progress, and connect with your teachers." />
      

      <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-md w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-3xl font-bold text-primary-600">
                Deutsch<span className="text-accent-500">Akademie</span>
              </h2>
            </Link>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Welcome back</h1>
            <p className="text-neutral-600">
              Sign in to access your student dashboard
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          >
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    className={`pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.email ? 'border-red-500' : 'border-neutral-300'}`}
                    placeholder="Your email address"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    className={`pl-10 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${errors.password ? 'border-red-500' : 'border-neutral-300'}`}
                    placeholder="Your password"
                    {...register('password', { required: 'Password is required' })}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </div>
            </form>

            <div className="mt-6">
              {resetSent ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4">
                  <p>Password reset email sent. Please check your inbox.</p>
                </div>
              ) : (
                <>
                  <button 
                    onClick={handlePasswordReset}
                    className="text-sm text-primary-600 hover:text-primary-800 transition-colors"
                    disabled={loading}
                  >
                    Forgot your password?
                  </button>
                  {resetError && (
                    <p className="mt-1 text-sm text-red-600">{resetError}</p>
                  )}
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-neutral-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-primary-600 hover:text-primary-800 transition-colors">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Login;