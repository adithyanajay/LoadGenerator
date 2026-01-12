import { Network } from "lucide-react";

export default function NetworkControls({ setParams }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 text-primary">
        <Network size={18} />
        <span className="font-medium">Network Load</span>
      </div>

      <input
        type="number"
        min="1"
        placeholder="Concurrent connections (--sock N)"
        onChange={(e) =>
          setParams((p) => ({ ...p, connections: e.target.value }))
        }
        className="w-full px-3 py-2 rounded-md border
          bg-white dark:bg-darkCard
          text-gray-900 dark:text-white
          border-gray-300 dark:border-gray-600"
      />
    </div>
  );
}
