import React, { useState, useEffect, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import './Signup.css';

interface SignupProps {
  /** Optional success message passed from the backend (e.g., via query string or context). */
  successMsg?: string;
  /** Optional error message passed from the backend. */
  errorMsg?: string;
}

const Signup: React.FC<SignupProps> = ({ successMsg, errorMsg }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localSuccess, setLocalSuccess] = useState<string | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Signup Page';
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('/user_register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        credentials: 'include',
      });

      if (response.ok) {
        setLocalSuccess('Registration successful. Please check your email to confirm.');
        setLocalError(null);
        // Optionally reset form fields
        setFullName('');
        setEmail('');
        setPassword('');
      } else {
        const errorText = await response.text();
        setLocalError(errorText || 'Registration failed. Please try again.');
        setLocalSuccess(null);
      }
    } catch (err) {
      setLocalError('Network error. Please try again later.');
      setLocalSuccess(null);
    }
  };

  return (
    <>
      <Navbar />

      <div className="modern-container p-5">
        <div className="row justify-content-center">
          <div className="col-md-4">