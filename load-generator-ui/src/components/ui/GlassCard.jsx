import React from "react";

export default function GlassCard({ children, title, className = "" }) {
    return (
        <div className={`bg-white/80 backdrop-blur-2xl border border-white/60 shadow-sm rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:bg-white/90 ${className}`}>
            {title && (
                <h2 className="text-sm font-semibold uppercase tracking-wide text-textPrimary dark:text-gray-400 mb-4 ml-1">
                    {title}
                </h2>
            )}
            {children}
        </div>
    );
}
