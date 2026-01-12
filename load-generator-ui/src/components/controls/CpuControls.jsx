import { Cpu } from "lucide-react";

export default function CpuControls({ setParams }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 text-primary">
        <Cpu size={18} />
        <span className="font-medium">CPU Load</span>
      </div>

      <input
        type="number"
        min="1"
        placeholder="Number of CPU threads (--cpu N)"
        onChange={(e) =>
          setParams((p) => ({ ...p, cpuThreads: e.target.value }))
        }
        className="w-full px-3 py-2 rounded-md border
          bg-white dark:bg-darkCard
          text-gray-900 dark:text-white
          border-gray-300 dark:border-gray-600"
      />
    </div>
  );
}
