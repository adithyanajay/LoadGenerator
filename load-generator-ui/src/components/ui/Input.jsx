import React from "react";

export default function Input({ label, type = "text", value, onChange, placeholder = "", className = "" }) {
    return (
        <div className={`relative group ${className}`}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    block px-4 py-3 w-full text-base text-textPrimary bg-white/60 rounded-xl border-1 border-gray-300
                    appearance-none focus:outline-none focus:ring-0 focus:border-accent
                    peer font-semibold placeholder-transparent
                "
            />
            <label
                className="
                    absolute text-sm text-textSecondary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
                    peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
                    left-4 font-medium pointer-events-none
                "
            >
                {label}
            </label>
        </div>
    );
}
