import React, { useState } from "react";

export default function PatientDashboard() {
    const [activeTab, setActiveTab] = useState("search");
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState({ specialization: "", hospital: "", availability: "" });
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [slot, setSlot] = useState("");
    const [amount, setAmount] = useState("");

    const dummyDoctors = [
        {
            id: 1,
            name: "Dr. Priya Sharma",
            specialization: "Cardiologist",
            hospital: "Apollo Hospital",
            availability: "Mon-Wed",
            experience: "10 years",
            fee: 500,
            slots: ["10:00 AM", "11:00 AM", "2:00 PM"],
        },
        {
            id: 2,
            name: "Dr. Ravi Kumar",
            specialization: "Dermatologist",
            hospital: "Fortis Hospital",
            availability: "Tue-Fri",
            experience: "8 years",
            fee: 400,
            slots: ["9:30 AM", "12:00 PM", "4:00 PM"],
        },
    ];

    const [bookings, setBookings] = useState([]);

    const handleBook = () => {
        if (!selectedDoctor || !slot || !amount) return alert("Fill all fields");
        const booking = {
            id: bookings.length + 1,
            doctor: selectedDoctor.name,
            hospital: selectedDoctor.hospital,
            slot,
            amount,
            date: new Date().toLocaleDateString(),
        };
        setBookings([...bookings, booking]);
        alert("Appointment Booked Successfully!");
        setSelectedDoctor(null);
        setSlot("");
        setAmount("");
    };

    const filteredDoctors = dummyDoctors.filter((doc) => {
        return (
            doc.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filter.specialization ? doc.specialization === filter.specialization : true) &&
            (filter.hospital ? doc.hospital === filter.hospital : true) &&
            (filter.availability ? doc.availability.includes(filter.availability) : true)
        );
    });

    return (
        <div className="min-h-screen bg-gray-100 p-6 font-sans">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">🧍‍♂️ Patient Dashboard</h1>

                {/* Tabs */}
                <div className="flex space-x-4 mb-6 justify-center">
                    {["search", "bookings"].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded-full ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === "search" && "Search Doctors"}
                            {tab === "bookings" && "Booking History"}
                        </button>
                    ))}
                </div>

                {/* Search & Book Section */}
                {activeTab === "search" && (
                    <div>
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <input
                                type="text"
                                placeholder="Search by Doctor Name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border p-2 rounded"
                            />
                            <select
                                className="border p-2 rounded"
                                onChange={(e) => setFilter({ ...filter, specialization: e.target.value })}
                            >
                                <option value="">Specialization</option>
                                <option>Cardiologist</option>
                                <option>Dermatologist</option>
                            </select>
                            <select
                                className="border p-2 rounded"
                                onChange={(e) => setFilter({ ...filter, hospital: e.target.value })}
                            >
                                <option value="">Hospital</option>
                                <option>Apollo Hospital</option>
                                <option>Fortis Hospital</option>
                            </select>
                            <select
                                className="border p-2 rounded"
                                onChange={(e) => setFilter({ ...filter, availability: e.target.value })}
                            >
                                <option value="">Availability</option>
                                <option>Mon</option>
                                <option>Tue</option>
                                <option>Wed</option>
                                <option>Thu</option>
                            </select>
                        </div>

                        {/* Doctor Cards */}
                        <div className="grid md:grid-cols-2 gap-4">
                            {filteredDoctors.map((doc) => (
                                <div key={doc.id} className="bg-gray-50 p-4 rounded-lg shadow">
                                    <h2 className="text-xl font-bold text-blue-700">{doc.name}</h2>
                                    <p>Specialization: {doc.specialization}</p>
                                    <p>Hospital: {doc.hospital}</p>
                                    <p>Experience: {doc.experience}</p>
                                    <p>Availability: {doc.availability}</p>
                                    <p>Fee: ₹{doc.fee}</p>
                                    <button
                                        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
                                        onClick={() => setSelectedDoctor(doc)}
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Booking Form */}
                        {selectedDoctor && (
                            <div className="mt-6 p-4 bg-white rounded-lg shadow border">
                                <h3 className="text-xl font-bold mb-2 text-blue-600">
                                    Booking with {selectedDoctor.name}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <select
                                        className="border p-2 rounded"
                                        value={slot}
                                        onChange={(e) => setSlot(e.target.value)}
                                    >
                                        <option value="">Select Time Slot</option>
                                        {selectedDoctor.slots.map((s) => (
                                            <option key={s}>{s}</option>
                                        ))}
                                    </select>
                                    <input
                                        type="number"
                                        placeholder="Enter Fee Amount"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="border p-2 rounded"
                                    />
                                </div>
                                <div className="mt-4 flex gap-3">
                                    <button
                                        className="bg-green-600 text-white px-4 py-2 rounded"
                                        onClick={handleBook}
                                    >
                                        Confirm Booking
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                        onClick={() => setSelectedDoctor(null)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Booking History */}
                {activeTab === "bookings" && (
                    <div className="mt-6">
                        <h2 className="text-xl font-bold mb-4">📄 Your Appointment History</h2>
                        {bookings.length === 0 ? (
                            <p>No bookings yet.</p>
                        ) : (
                            <table className="w-full table-auto border border-gray-200">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-4 py-2">Doctor</th>
                                        <th className="px-4 py-2">Hospital</th>
                                        <th className="px-4 py-2">Slot</th>
                                        <th className="px-4 py-2">Fee</th>
                                        <th className="px-4 py-2">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((b) => (
                                        <tr key={b.id} className="text-center">
                                            <td className="border px-4 py-2">{b.doctor}</td>
                                            <td className="border px-4 py-2">{b.hospital}</td>
                                            <td className="border px-4 py-2">{b.slot}</td>
                                            <td className="border px-4 py-2">₹{b.amount}</td>
                                            <td className="border px-4 py-2">{b.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
