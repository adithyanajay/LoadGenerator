import { Network } from "lucide-react";
import Input from "../ui/Input";

export default function NetworkControls({ setParams }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3 text-textPrimary">
        <Network size={18} className="text-accent" />
        <span className="font-semibold text-sm uppercase tracking-wide">Network Load Configuration</span>
      </div>

      <Input
        type="number"
        label="Concurrent Connections"
        placeholder="e.g. 100"
        onChange={(e) =>
          setParams((p) => ({ ...p, connections: e.target.value }))
        }
        className="w-full"
      />
    </div>
  );
}
