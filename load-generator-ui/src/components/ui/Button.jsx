import React from "react";

export default function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
    disabled = false
}) {
    const baseStyles = "px-6 py-2.5 rounded-xl font-medium transition-all duration-300 active:scale-95 disabled:active:scale-100 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-[#8B5CF6] bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-bold shadow-lg hover:shadow-primary/40 disabled:opacity-100 disabled:bg-gray-300 disabled:from-gray-300 disabled:to-gray-400 disabled:text-gray-500",
        secondary: "bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 backdrop-blur-md text-textPrimary dark:text-gray-200 border border-white/20 disabled:text-[#8B84A8] disabled:opacity-75",
        danger: "bg-error/10 text-error hover:bg-error/20 border border-error/20 disabled:opacity-70",
        ghost: "hover:bg-black/5 dark:hover:bg-white/5 text-textSecondary dark:text-gray-300 disabled:text-[#8B84A8] disabled:opacity-70"
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
