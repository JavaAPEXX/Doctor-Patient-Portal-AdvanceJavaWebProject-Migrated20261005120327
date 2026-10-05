import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/modern-ui.css';
import AdminLoginComponent from './AdminLoginComponent';
import ChangePassword from './src/pages/ChangePassword';
import DoctorLoginComponent from './DoctorLoginComponent';
import IndexPage from './src/components/IndexPage';
import Signup from './src/pages/Signup';
import UserAppointmentComponent from './UserAppointmentComponent';
import UserLogin from './src/components/UserLogin';
import ViewAppointmentComponent from './ViewAppointmentComponent';
import DoctorForm from './src/components/admin/DoctorForm';
import AdminEditDoctorComponent from './AdminEditDoctorComponent';
import AdminIndexComponent from './AdminIndexComponent';
import Navbar from './src/components/Navbar';
import AdminPatientComponent from './AdminPatientComponent';
import AdminViewDoctorComponent from './AdminViewDoctorComponent';
import ComponentAllcssComponent from './ComponentAllcssComponent';
import Footer from './src/components/Footer';
import ComponentFootersimpleComponent from './ComponentFootersimpleComponent';
import ComponentNavbarComponent from './ComponentNavbarComponent';
import DoctorCommentComponent from './DoctorCommentComponent';
import DoctorEditProfileComponent from './DoctorEditProfileComponent';
import DoctorDashboard from './src/components/DoctorDashboard';
import DoctorNavbarComponent from './DoctorNavbarComponent';
import DoctorPatientComponent from './DoctorPatientComponent';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="modern-app-root">
        <header className="modern-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#2563eb' }}>Modernized Application</span>
          </div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#475569', fontWeight: 500 }}>Home</Link>
          </nav>
        </header>
        <main className="modern-main-content">
          <Routes>
        <Route path="/" element={<AdminLoginComponent />} />
        <Route path="/adminlogin" element={<AdminLoginComponent />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/doctorlogin" element={<DoctorLoginComponent />} />
        <Route path="/indexpage" element={<IndexPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userappointment" element={<UserAppointmentComponent />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/viewappointment" element={<ViewAppointmentComponent />} />
        <Route path="/doctorform" element={<DoctorForm />} />
        <Route path="/admineditdoctor" element={<AdminEditDoctorComponent />} />
        <Route path="/adminindex" element={<AdminIndexComponent />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/adminpatient" element={<AdminPatientComponent />} />
        <Route path="/adminviewdoctor" element={<AdminViewDoctorComponent />} />
        <Route path="/allcss" element={<ComponentAllcssComponent />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/footersimple" element={<ComponentFootersimpleComponent />} />
        <Route path="/navbar" element={<ComponentNavbarComponent />} />
        <Route path="/doctorcomment" element={<DoctorCommentComponent />} />
        <Route path="/doctoreditprofile" element={<DoctorEditProfileComponent />} />
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
        <Route path="/doctornavbar" element={<DoctorNavbarComponent />} />
        <Route path="/doctorpatient" element={<DoctorPatientComponent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
