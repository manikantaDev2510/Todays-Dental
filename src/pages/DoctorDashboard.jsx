import React, { useState } from "react";

export default function DoctorDashboard() {
    const [profile] = useState({
        name: "Dr. John Doe",
        specialization: "Cardiology",
        experience: "10 years",
        qualifications: "MBBS, MD",
    });

    const [hospitals, setHospitals] = useState([]);
    const [newHospital, setNewHospital] = useState({ name: "", department: "" });

    const [timeSlots, setTimeSlots] = useState([]);
    const [newSlot, setNewSlot] = useState({ day: "", start: "", end: "" });

    const [fees, setFees] = useState([]);
    const [newFee, setNewFee] = useState({ hospital: "", fee: "" });

    const [dashboard] = useState({
        earnings: 50000,
        consultations: 120,
        revenueByHospital: [
            { name: "City Hospital", amount: 30000 },
            { name: "Green Valley Clinic", amount: 20000 },
        ],
    });

    const addHospital = () => {
        if (newHospital.name && newHospital.department) {
            setHospitals([...hospitals, newHospital]);
            setNewHospital({ name: "", department: "" });
        }
    };

    const addSlot = () => {
        if (newSlot.day && newSlot.start && newSlot.end) {
            setTimeSlots([...timeSlots, newSlot]);
            setNewSlot({ day: "", start: "", end: "" });
        }
    };

    const addFee = () => {
        if (newFee.hospital && newFee.fee) {
            setFees([...fees, newFee]);
            setNewFee({ hospital: "", fee: "" });
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 font-sans bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">🧑‍⚕️ Doctor Dashboard</h1>

            {/* Profile */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">👨‍⚕️ Profile Information</h2>
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Specialization:</strong> {profile.specialization}</p>
                    <p><strong>Qualifications:</strong> {profile.qualifications}</p>
                    <p><strong>Experience:</strong> {profile.experience}</p>
                </div>
            </div>

            {/* Two-Column Layout */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Hospital Associations */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">🏥 Hospital Associations</h2>
                    <div className="space-y-3 mb-4">
                        <input
                            type="text"
                            placeholder="Hospital Name"
                            className="w-full border rounded px-4 py-2"
                            value={newHospital.name}
                            onChange={(e) => setNewHospital({ ...newHospital, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Department"
                            className="w-full border rounded px-4 py-2"
                            value={newHospital.department}
                            onChange={(e) => setNewHospital({ ...newHospital, department: e.target.value })}
                        />
                        <button onClick={addHospital} className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
                            Add Association
                        </button>
                    </div>
                    <ul className="list-disc list-inside text-gray-700">
                        {hospitals.map((h, i) => (
                            <li key={i}>{h.name} – {h.department}</li>
                        ))}
                    </ul>
                </div>

                {/* Time Slots */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">🕒 Set Available Time Slots</h2>
                    <div className="space-y-3 mb-4">
                        <input
                            type="text"
                            placeholder="Day (e.g. Monday)"
                            className="w-full border rounded px-4 py-2"
                            value={newSlot.day}
                            onChange={(e) => setNewSlot({ ...newSlot, day: e.target.value })}
                        />
                        <div className="flex gap-2">
                            <input
                                type="time"
                                className="w-1/2 border rounded px-4 py-2"
                                value={newSlot.start}
                                onChange={(e) => setNewSlot({ ...newSlot, start: e.target.value })}
                            />
                            <input
                                type="time"
                                className="w-1/2 border rounded px-4 py-2"
                                value={newSlot.end}
                                onChange={(e) => setNewSlot({ ...newSlot, end: e.target.value })}
                            />
                        </div>
                        <button onClick={addSlot} className="w-full bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700">
                            Add Time Slot
                        </button>
                    </div>
                    <ul className="list-disc list-inside text-gray-700">
                        {timeSlots.map((s, i) => (
                            <li key={i}>{s.day}: {s.start} - {s.end}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Fee Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">💰 Set Consultation Fees</h2>
                <div className="space-y-3 mb-4">
                    <input
                        type="text"
                        placeholder="Hospital Name"
                        className="w-full border rounded px-4 py-2"
                        value={newFee.hospital}
                        onChange={(e) => setNewFee({ ...newFee, hospital: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Fee (₹)"
                        className="w-full border rounded px-4 py-2"
                        value={newFee.fee}
                        onChange={(e) => setNewFee({ ...newFee, fee: e.target.value })}
                    />
                    <button onClick={addFee} className="w-full bg-purple-600 text-white rounded px-4 py-2 hover:bg-purple-700">
                        Set Fee
                    </button>
                </div>
                <ul className="list-disc list-inside text-gray-700">
                    {fees.map((f, i) => (
                        <li key={i}>{f.hospital}: ₹{f.fee}</li>
                    ))}
                </ul>
            </div>

            {/* Dashboard Stats */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">📊 Dashboard Overview</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
                        <p className="text-gray-500">Total Earnings</p>
                        <p className="text-2xl font-bold text-blue-700">₹{dashboard.earnings}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl shadow-sm">
                        <p className="text-gray-500">Consultations</p>
                        <p className="text-2xl font-bold text-green-700">{dashboard.consultations}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl shadow-sm">
                        <p className="text-gray-500">Revenue by Hospital</p>
                        <ul className="text-sm mt-2 text-gray-700">
                            {dashboard.revenueByHospital.map((h, i) => (
                                <li key={i}>{h.name}: ₹{h.amount}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
