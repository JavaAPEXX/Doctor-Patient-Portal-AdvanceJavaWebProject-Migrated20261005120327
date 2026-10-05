import React, { useState, FormEvent } from "react";

interface DoctorFormProps {
  /** Message set in the session after a successful add operation */
  successMsg?: string;
  /** Message set in the session after a failed add operation */
  errorMsg?: string;
  /**
   * List of specialist names to populate the `<select>`.
   * The original JSP rendered this list server‑side, so it must be supplied
   * by the parent component (e.g. fetched from an existing endpoint).
   */
  specialistOptions: string[];
}

/**
 * React implementation of `admin/doctor.jsp`.
 * The component mirrors the original markup 1:1 while applying the
 * modern CSS design system (`modern_container`, `modern_card`, etc.).
 * Form submission is performed with `fetch` using `application/x-www-form-urlencoded`
 * to keep the backend contract unchanged.
 */
const DoctorForm: React.FC<DoctorFormProps> = ({
  successMsg,
  errorMsg,
  specialistOptions,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    qualification: "",
    specialist: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Build URL‑encoded body to respect the original form contract
    const urlEncoded = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      urlEncoded.append(key, value);
    });

    try {
      const response = await fetch("../addDoctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncoded.toString(),
      });

      // The original JSP relied on a redirect that set session attributes.
      // Here we simply reload the page so that any server‑side messages become
      // available again (or the parent can handle the response).
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        // If the backend returns JSON with messages, you could handle it here.
        // Keeping it minimal to avoid inventing new contracts.
        window.location.reload();
      }
    } catch (err) {
      console.error("Error submitting doctor form:", err);
    }
  };

  return (
    <div className="modern-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="modern-card p-4 shadow-sm" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4 text-danger">Add Doctor</h2>

        {/* Success / Error alerts */}
        {successMsg && (
          <div className="alert-box alert-success mb-3 text-center">
            {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="alert-box alert-danger mb-3 text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          {/* Full Name */}
          <div className="form-group mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="form-group mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="form-control"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          {/* Qualification */}
          <div className="form-group mb-3">
            <label htmlFor="qualification" className="form-label">
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              className="form-control"
              placeholder="Enter qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            />
          </div>

          {/* Specialist */}
          <div className="form-group mb-3">
            <label htmlFor="specialist" className="form-label">
              Specialist
            </label>
            <select
              id="specialist"
              name="specialist"
              className="form-control"
              value={formData.specialist}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                ---Select---
              </option>
              {specialistOptions.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Enter mobile number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorForm;