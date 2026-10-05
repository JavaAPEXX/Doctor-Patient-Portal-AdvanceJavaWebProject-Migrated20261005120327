import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Props expected from the server‑side rendering layer or a parent component.
 * The migration does **not** invent any API calls – all dynamic values must be
 * supplied by the existing backend (e.g. via a template engine, a higher‑order
 * component, or a data‑fetching wrapper that respects the current contract).
 */
interface DoctorDashboardProps {
  /** The logged‑in doctor object; `null` or `undefined` means not authenticated. */
  doctorObj: Record<string, unknown> | null;
  /** Total number of doctors in the system (computed by DoctorDAO in the JSP). */
  totalNumberOfDoctor: number;
  /** Total appointments for the currently logged‑in doctor. */
  totalAppointments: number;
}

/**
 * React version of `doctor/index.jsp`.
 *
 * - Preserves the conditional redirect when `doctorObj` is missing.
 * - Shows two statistic cards identical to the original JSP.
 * - Uses the modern design‑system class names requested in the migration config.
 */
const DoctorDashboard: React.FC<DoctorDashboardProps> = ({
  doctorObj,
  totalNumberOfDoctor,
  totalAppointments,
}) => {
  const navigate = useNavigate();

  // Replicates the `<c:if test="${empty doctorObj }">` redirect logic.
  useEffect(() => {
    if (!doctorObj) {
      navigate("/doctor_login", { replace: true });
    }
  }, [doctorObj, navigate]);

  // If the redirect runs, the component will unmount quickly; render nothing.
  if (!doctorObj) {
    return null;
  }

  return (
    <div className="modern-container p-5">
      <p className="text-center text-success fs-3">Doctor Dashboard</p>

      <div className="row">
        {/* Card 1 – Total Doctors */}
        <div className="col-md-4 offset-md-2">
          <div className="modern-card my-card">
            <div className="card-body text-center text-success">
              {/* Font Awesome icons are kept – they are part of the original UI */}
              <i className="fa-solid fa-user-doctor fa-3x"></i>
              <br />
              <p className="fs-4 text-center">
                Doctor <br />
                {totalNumberOfDoctor}
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 – Total Appointments for the logged‑in doctor */}
        <div className="col-md-4">
          <div className="modern-card my-card">
            <div className="card-body text-center text-success">
              <i className="fa-solid fa-calendar-check fa-3x"></i>
              <br />
              <p className="fs-4 text-center">
                Total Appointment <br />
                {totalAppointments}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;