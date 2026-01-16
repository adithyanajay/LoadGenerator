import React from "react";
import { motion } from "framer-motion";

export default function SegmentedControl({ options, selected, onChange }) {
    return (
        <div className="flex p-1 bg-gray-100/80 rounded-xl backdrop-blur-sm relative border border-gray-200/50">
            {options.map((option) => {
                const isSelected = selected === option.value;
                return (
                    <button
                        key={option.value}
                        onClick={() => onChange(option.value)}
                        className={`
              relative flex-1 py-1.5 text-sm font-medium rounded-lg z-10 transition-colors duration-200
              ${isSelected ? "text-accent font-bold" : "text-textSecondary hover:text-textPrimary font-medium"}
            `}
                    >
                        {isSelected && (
                            <motion.div
                                layoutId="segmented-bg"
                                className="absolute inset-0 bg-white shadow-sm rounded-lg -z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}
