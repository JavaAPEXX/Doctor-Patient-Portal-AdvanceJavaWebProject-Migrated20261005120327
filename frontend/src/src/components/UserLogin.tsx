import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // adjust the import path as needed

type UserLoginProps = {
  /** Message set in the session by the server (optional) */
  successMsg?: string;
  /** Message set in the session by the server (optional) */
  errorMsg?: string;
};

const UserLogin: React.FC<UserLoginProps> = ({ successMsg, errorMsg }) => {
  // ----- form state (only the fields present in the JSP) -----
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ----- optional client‑side submit feedback -----
  const [clientSuccess, setClientSuccess] = useState<string | null>(null);
  const [clientError, setClientError] = useState<string | null>(null);

  // ----- submit handler preserving the original POST contract -----
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setClientSuccess(null);
    setClientError(null);

    try {
      const response = await fetch("/userLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email,
          password,
        }).toString(),
        credentials: "include", // keep session cookies
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || "Login failed");
      }

      // The legacy JSP expects a redirect or a session message.
      // If the backend returns JSON with a message we surface it,
      // otherwise we simply reload to let the server set the session.
      const json = await response.json().catch(() => null);
      if (json?.successMsg) {
        setClientSuccess(json.successMsg);
      } else {
        window.location.reload();
      }
    } catch (err: any) {
      setClientError(err.message);
    }
  };

  return (
    <>
      {/* Shared navigation bar */}
      <Navbar />

      {/* Modern centered auth container */}
      <div className="modern-container p-5 d-flex justify-content-center align-items-center">
        <div
          className="modern-card my-card"
          style={{ maxWidth: "420px", width: "100%" }}
        >
          {/* Card header – kept identical to the JSP */}
          <div className="card-header text-center text-white my-bg-color">
            <p className="fs-4 text-center mt-2">
              <i className="fa fa-group" aria-hidden="true"></i> User Login
            </p>
          </div>

          {/* Card body */}
          <div className="card-body">
            {/* Server‑side messages (JSTL <c:if>) */}
            {successMsg && (
              <div className="alert-box alert-success text-center mb