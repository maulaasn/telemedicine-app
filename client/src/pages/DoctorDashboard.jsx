import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const DoctorDashboard = () => {
    const [patients, setPatients] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/doctor/appointments')
            .then((res) => {
                console.log(res.data); // Cek data yang diterima
                setPatients(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    const formatDateTime = (dateString, timeString) => {
        if (!dateString) return 'Not Set';
        const date = new Date(dateString);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${date.getFullYear()}`;
        const formattedTime = timeString
            ? `${timeString.split(':')[0].padStart(2, '0')}:${timeString.split(':')[1]}`
            : '';
        return `${formattedDate} ${formattedTime}`;
    };

    // Submit jadwal appointment awal
    const handleSetAppointment = (id, date, time) => {
        axios.post('http://localhost:5000/doctor/set-appointment', { id, date, time })
            .then(() => alert('Appointment set successfully'))
            .catch((err) => console.error(err));
    };

    // Submit jadwal appointment berikutnya
    const handleAddNextAppointment = (id, date, time) => {
        axios.post('http://localhost:5000/doctor/add-next-appointment', { id, date, time })
            .then(() => alert('Next appointment added successfully'))
            .catch((err) => console.error(err));
    };

    // Fungsi untuk menangani perubahan tanggal
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    // Fungsi untuk menangani perubahan waktu
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-teal-600 text-white flex flex-col fixed top-0 left-0 h-full">
                <h1 className="text-2xl font-bold p-4">Doctor Dashboard</h1>
                <nav className="flex-1">
                    <ul>
                        <li className="p-4 hover:bg-teal-500">
                            <a href="#patients">Manage Appointments</a>
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
            <main className="flex-1 p-6 bg-teal-50 ml-64">
                <section id="patients">
                    <h2 className="text-xl font-semibold mb-4 text-teal-800">Patient Appointments</h2>
                    <table className="table-auto w-full border-collapse border border-teal-200">
                        <thead>
                            <tr className="bg-teal-100">
                                <th className="border p-2 text-teal-800">Name</th>
                                <th className="border p-2 text-teal-800">Initial Appointment</th>
                                <th className="border p-2 text-teal-800">Next Appointment</th>
                                <th className="border p-2 text-teal-800">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.id} className="hover:bg-teal-100">
                                    <td className="border p-2">{patient.name}</td>
                                    <td className="border p-2">
                                        {patient.appointment_date || 'Not Set'} {patient.appointment_time || ''}
                                    </td>
                                    <td className="border p-2">
                                        {patient.next_appointment_date || 'Not Set'} {patient.next_appointment_time || ''}
                                    </td>
                                    <td className="border p-2 flex flex-col">
                                        <input
                                            type="date"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            className="mb-2 p-2 border rounded text-teal-800"
                                        />
                                        <input
                                            type="time"
                                            value={selectedTime}
                                            onChange={handleTimeChange}
                                            className="mb-2 p-2 border rounded text-teal-800"
                                        />
                                        <button
                                            onClick={() => handleSetAppointment(patient.id, selectedDate, selectedTime)}
                                            className="bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded mb-2"
                                        >
                                            Set Initial
                                        </button>
                                        <button
                                            onClick={() => handleAddNextAppointment(patient.id, selectedDate, selectedTime)}
                                            className="bg-teal-400 hover:bg-teal-500 text-white px-2 py-1 rounded"
                                        >
                                            Add Next
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default DoctorDashboard;