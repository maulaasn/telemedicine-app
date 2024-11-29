import React from 'react';
import { Link } from 'react-router-dom';

const MainDashboard = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100 font-sans text-sm">
            <header className="bg-teal-500 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="ml-10">
                        <h1 className="text-2xl font-bold">Telemedicine App</h1>
                        <p className="mt-2 text-sm">Konsultasi Kesehatan Online Anda</p>
                    </div>
                </div>
            </header>

            <main className="container mx-auto p-8 flex-grow">
                <section className="text-center mb-12">
                    <h2 className="text-2xl font-semibold text-gray-700">Selamat Datang di Telemedicine</h2>
                    <p className="mt-4 text-lg text-gray-600">
                    Aplikasi Telemedicine kami memungkinkan Anda untuk berkonsultasi dengan dokter secara online. Anda dapat membuat janji temu, dan melakukan janji temu berikutnya dengan mudah.
                    </p>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 hover:translate-y-[-5px] transition-all duration-300">
                        <h3 className="text-xl font-semibold mt-4">Doctor Dashboard</h3>
                        <p className="mt-2 text-gray-600">Manage appointments, view patients, and more.</p>
                        <Link to="/doctor" className="mt-4 inline-block text-teal-500 hover:text-teal-700">
                            Go to Doctor Dashboard
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 hover:translate-y-[-5px] transition-all duration-300">
                        <h3 className="text-xl font-semibold mt-4">Patient Dashboard</h3>
                        <p className="mt-2 text-gray-600">Request appointments, view your appointments , and more.</p>
                        <Link to="/patient" className="mt-4 inline-block text-teal-500 hover:text-teal-700">
                            Go to Patient Dashboard
                        </Link>
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Informasi Kontak</h2>
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi kami:</p>
                        <p className="mt-4 text-sm text-gray-500">Email: support@telemedicine.com</p>
                        <p className="mt-1 text-sm text-gray-500">Telepon: 123-456-7890</p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-teal-500 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Telemedicine App. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainDashboard;