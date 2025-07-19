import React, { useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function DoctorRegister() {
    const [name, setName] = useState("");
    const [qualifications, setQualifications] = useState("");
    const [specializations, setSpecializations] = useState("");
    const [experience, setExperience] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", userCred.user.uid), {
                role: "doctor",
                name,
                qualifications,
                specializations: specializations.split(",").map(s => s.trim()),
                experience,
            });
            navigate("/doctor-dashboard");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Doctor Registration</h2>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Qualifications" value={qualifications} onChange={e => setQualifications(e.target.value)} />
            <input placeholder="Specializations (comma separated)" value={specializations} onChange={e => setSpecializations(e.target.value)} />
            <input placeholder="Experience (years)" value={experience} onChange={e => setExperience(e.target.value)} />
            <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
}

export default DoctorRegister;