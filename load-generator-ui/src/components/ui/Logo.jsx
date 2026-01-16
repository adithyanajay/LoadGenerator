import React from "react";

export default function Logo({ className = "" }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Icon Container with Purple Gradient */}
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E2D5FF] via-[#A78BFA] to-[#7C3AED] shadow-lg flex items-center justify-center overflow-hidden border border-white/20">
                {/* 3D Glass Highlight */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

                {/* DQ Monogram Glyph */}
                {/* A stylized 'D' merging into a 'Q' tail */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10 drop-shadow-md transform translate-x-0.5"
                >
                    {/* The 'D' main body */}
                    <path
                        d="M6 4h5c3.5 0 6 2.5 6 7s-2.5 7-6 7H6V4z"
                        fill="white"
                        className="opacity-95"
                    />
                    {/* The 'Q' tail piercing through */}
                    <path
                        d="M13 14l5 5"
                        stroke="url(#q-gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="filter drop-shadow-sm"
                    />
                    <defs>
                        <linearGradient id="q-gradient" x1="13" y1="14" x2="18" y2="19" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8B5CF6" />
                            <stop offset="1" stopColor="#5B21B6" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Text Label: Dynami + Q */}
            <h1 className="text-2xl font-bold tracking-tight select-none flex items-baseline">
                <span className="text-[#2B1E3F]">Dynami</span>
                <span className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] bg-clip-text text-transparent transform translate-y-px">Q</span>
            </h1>
        </div>
    );
}
