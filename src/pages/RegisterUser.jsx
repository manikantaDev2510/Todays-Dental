import React, { useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function PatientRegister() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [uniqueId, setUniqueId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", userCred.user.uid), {
                role: "patient",
                name,
                gender,
                dob,
                uniqueId,
            });
            navigate("/patient-dashboard");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Patient Registration</h2>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Gender" value={gender} onChange={e => setGender(e.target.value)} />
            <input placeholder="DOB" type="date" value={dob} onChange={e => setDob(e.target.value)} />
            <input placeholder="Unique ID (Aadhar/Passport)" value={uniqueId} onChange={e => setUniqueId(e.target.value)} />
            <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
}

export default PatientRegister;