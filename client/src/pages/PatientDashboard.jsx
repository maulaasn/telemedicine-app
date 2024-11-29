import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const PatientDashboard = () => {
    const [appointmentRequests, setAppointmentRequests] = useState([]);
    const [nextAppointments, setNextAppointments] = useState([]);
    const [newRequest, setNewRequest] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:5000/patient/appointments/1') 
            .then((res) => {
                setAppointmentRequests(res.data);
                setNextAppointments(res.data); 
            })
            .catch((err) => console.error(err));
    }, []);

    const formatDate = (isoString, timeString) => {
        const date = new Date(isoString);
        const [hours, minutes] = timeString.split(':');
        date.setHours(hours, minutes);
      
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
      
        const formattedTime = `${hours}:${minutes}`;
        return `${day}-${month}-${year} ${formattedTime}`;
      };
      
      const isoDate = "2024-11-29";
      const time = "14:00:00";
      
      console.log(formatDate(isoDate, time));

    const handleRequestAppointment = () => {
        axios.post('http://localhost:5000/patient/request-appointment', {
            name: newRequest,
        })
            .then(() => {
                alert('Appointment requested successfully');
                setNewRequest('');
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-teal-600 text-white flex flex-col">
                <h1 className="text-2xl font-bold p-4">Patient Dashboard</h1>
                <nav className="flex-1">
                    <ul>
                        <li className="p-4 hover:bg-teal-500">
                            <a href="#request-appointment">Request Appointments</a>
                        </li>
                    </ul>
                </nav>
                {/* Logout Button */}
                <div className="mt-auto p-4">
                    <Link to="/" className="bg-teal-500 hover:bg-teal-600 text-white text-center py-2 px-4 rounded w-full block">
                        Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-teal-50">
                <section id="request-appointment" className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-teal-800">Request an Appointment</h2>
                    <input
                        type="text"
                        value={newRequest}
                        onChange={(e) => setNewRequest(e.target.value)}
                        placeholder="Enter your name"
                        className="border p-2 w-full mb-4 rounded text-teal-800"
                    />
                    <button
                        onClick={handleRequestAppointment}
                        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded">
                        Submit Request
                    </button>
                </section>
                <section id="appointments">
                </section>
            </main>
        </div>
    );
};

export default PatientDashboard;