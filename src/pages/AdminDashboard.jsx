import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function AdminDashboard() {
    const [doctors, setDoctors] = useState([]);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [consultations, setConsultations] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [newDoctor, setNewDoctor] = useState({
        name: "",
        department: "",
        revenue: ""
    });

    useEffect(() => {
        const sampleDoctors = [
            { name: "Dr. A", department: "Cardiology", revenue: 4000 },
            { name: "Dr. B", department: "Pediatrics", revenue: 2000 }
        ];
        setDoctors(sampleDoctors);
        setTotalRevenue(sampleDoctors.reduce((acc, d) => acc + d.revenue, 0));
        setConsultations(38);
    }, []);

    const handleAddDoctor = () => {
        const revenue = parseInt(newDoctor.revenue);
        if (!newDoctor.name || !newDoctor.department || isNaN(revenue)) {
            alert("Please fill all fields correctly.");
            return;
        }
        const doctor = { ...newDoctor, revenue };
        setDoctors([...doctors, doctor]);
        setTotalRevenue(totalRevenue + revenue);
        setNewDoctor({ name: "", department: "", revenue: "" });
        setShowModal(false);
    };

    const handleDeleteDoctor = (index) => {
        const updatedDoctors = [...doctors];
        const removed = updatedDoctors.splice(index, 1)[0];
        setDoctors(updatedDoctors);
        setTotalRevenue(totalRevenue - removed.revenue);
    };

    return (
        <div className={`p-6 bg-gray-50 min-h-screen ${showModal ? "overflow-hidden" : ""}`}>
            <h2 className="text-3xl font-bold text-center mb-8">
                🏥 Hospital Admin Dashboard
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-4 shadow-md border-t-4 border-blue-500 rounded-xl">
                    <div className="flex justify-between">
                        <span>Total Revenue</span>
                        <span className="text-blue-700 font-semibold">
                            ₹{totalRevenue.toLocaleString()}
                        </span>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-md border-t-4 border-green-500 rounded-xl">
                    <div className="flex justify-between">
                        <span>Total Consultations</span>
                        <span className="text-green-700 font-semibold">{consultations}</span>
                    </div>
                </div>
                <div className="bg-white p-4 shadow-md border-t-4 border-yellow-500 rounded-xl">
                    <div className="flex justify-between">
                        <span>Total Doctors</span>
                        <span className="text-yellow-600 font-semibold">{doctors.length}</span>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded shadow-md overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b">
                    <h3 className="text-lg font-semibold text-gray-700">👨‍⚕️ Doctors Overview</h3>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        + Add Doctor
                    </button>
                </div>
                <table className="w-full text-sm text-center">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Department</th>
                            <th className="p-3">Revenue</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doc, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="p-3">{doc.name}</td>
                                <td className="p-3">{doc.department}</td>
                                <td className="p-3">₹{doc.revenue.toLocaleString()}</td>
                                <td className="p-3">
                                    <button
                                        onClick={() => handleDeleteDoctor(idx)}
                                        className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {doctors.length === 0 && (
                            <tr>
                                <td colSpan="4" className="py-6 text-gray-500">
                                    No doctors available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal Dialog */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                        onClick={() => setShowModal(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">Add New Doctor</h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <IoClose size={24} />
                            </button>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAddDoctor();
                            }}
                            className="p-4 space-y-4"
                        >
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Doctor Name"
                                    value={newDoctor.name}
                                    onChange={(e) =>
                                        setNewDoctor({ ...newDoctor, name: e.target.value })
                                    }
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="department"
                                    placeholder="Department"
                                    value={newDoctor.department}
                                    onChange={(e) =>
                                        setNewDoctor({ ...newDoctor, department: e.target.value })
                                    }
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="number"
                                    name="revenue"
                                    placeholder="Revenue"
                                    value={newDoctor.revenue}
                                    onChange={(e) =>
                                        setNewDoctor({ ...newDoctor, revenue: e.target.value })
                                    }
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div className="flex justify-end space-x-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                                >
                                    Add Doctor
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}