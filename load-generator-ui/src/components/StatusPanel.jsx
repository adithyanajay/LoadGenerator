import { motion } from "framer-motion";

export default function StatusPanel({ status }) {
  const isRunning = status === "RUNNING";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`
        relative w-24 h-24 rounded-full flex items-center justify-center 
        ${isRunning ? "bg-success/10" : "bg-accent/10"}
        transition-colors duration-500
      `}>
        {/* Pulse Effect */}
        {isRunning && (
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-success/20 rounded-full"
          />
        )}

        <div className={`
          w-4 h-4 rounded-full shadow-sm
          ${isRunning ? "bg-success shadow-success/50" : "bg-accent shadow-accent/50"}
        `} />
      </div>

      <div className="text-center">
        <p className="text-xs uppercase tracking-widest text-textSecondary font-bold mb-1">Status</p>
        <p className={`text-2xl font-bold tracking-tight ${isRunning ? "text-success" : "text-accent"}`}>
          {status}
        </p>
      </div>
    </div>
  );
}
