import React from "react";

const ModalLogin = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000]/80">
            <div className="bg-white-500 rounded-lg shadow-lg p-8 w-full max-w-sm relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 text-lg hover:text-gray-700"
                    onClick={onClose}
                >
                    X
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border rounded px-3 py-2"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full border rounded px-3 py-2"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#31C4F3] text-white py-2 rounded hover:bg-[#1fa3d6] transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalLogin;