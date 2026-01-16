import { MemoryStick } from "lucide-react";
import Input from "../ui/Input";

export default function MemoryControls({ setParams }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3 text-textPrimary">
        <MemoryStick size={18} className="text-accent" />
        <span className="font-semibold text-sm uppercase tracking-wide">Memory Load Configuration</span>
      </div>

      <Input
        type="number"
        label="Memory (MB)"
        placeholder="e.g. 512"
        onChange={(e) =>
          setParams((p) => ({ ...p, memoryMB: e.target.value }))
        }
        className="w-full"
      />
    </div>
  );
}
