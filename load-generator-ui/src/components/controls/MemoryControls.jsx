import { MemoryStick } from "lucide-react";

export default function MemoryControls({ setParams }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 text-primary">
        <MemoryStick size={18} />
        <span className="font-medium">Memory Load</span>
      </div>

      <input
        type="number"
        min="128"
        placeholder="Memory in MB (--vm-bytes XMB)"
        onChange={(e) =>
          setParams((p) => ({ ...p, memoryMB: e.target.value }))
        }
        className="w-full px-3 py-2 rounded-md border
          bg-white dark:bg-darkCard
          text-gray-900 dark:text-white
          border-gray-300 dark:border-gray-600"
      />
    </div>
  );
}
