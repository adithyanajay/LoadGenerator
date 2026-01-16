import { Cpu } from "lucide-react";
import Input from "../ui/Input";

export default function CpuControls({ setParams }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3 text-textPrimary">
        <Cpu size={18} className="text-accent" />
        <span className="font-semibold text-sm uppercase tracking-wide">CPU Load Configuration</span>
      </div>

      <Input
        type="number"
        label="Threads"
        placeholder="Number of CPU threads"
        onChange={(e) =>
          setParams((p) => ({ ...p, cpuThreads: e.target.value }))
        }
        className="w-full"
      />
    </div>
  );
}
