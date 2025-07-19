import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl">
                <div className="mt-6 text-center">
                    <p className="text-gray-600 mb-2">Login as:</p>
                    <div className="flex justify-center gap-4">
                        <Link to="/register/admin" className="text-blue-500 hover:underline">Admin</Link>
                        <Link to="/register/user" className="text-blue-500 hover:underline">User</Link>
                        <Link to="/register/doctor" className="text-blue-500 hover:underline">Doctor</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
