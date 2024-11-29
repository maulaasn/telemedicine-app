import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDashboard from './pages/MainDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Routes>
                    <Route path="/" element={<MainDashboard />} />
                    <Route path="/doctor" element={<DoctorDashboard />} />
                    <Route path="/patient" element={<PatientDashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;