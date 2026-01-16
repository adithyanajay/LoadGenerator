import { useState } from "react";
import TargetConfig from "../components/TargetConfig";
import LoadTypeSelector from "../components/LoadTypeSelector";
import CpuControls from "../components/controls/CpuControls";
import MemoryControls from "../components/controls/MemoryControls";
import NetworkControls from "../components/controls/NetworkControls";
import DurationInput from "../components/DurationInput";
import StatusPanel from "../components/StatusPanel";
import LoadChart from "../components/LoadChart";
import MemoryChart from "../components/MemoryChart";
import NetworkChart from "../components/NetworkChart";
import CommandPreview from "../components/CommandPreview";
import { buildStressCommand } from "../utils/stressCommandBuilder";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";

export default function Dashboard() {
  const [loadType, setLoadType] = useState("cpu");
  const [status, setStatus] = useState("IDLE");
  const [params, setParams] = useState({});
  const [duration, setDuration] = useState("");

  const command = buildStressCommand(loadType, params, duration);
  const isRunning = status === "RUNNING";

  return (
    <div className="max-w-4xl mx-auto pb-10 space-y-8">

      {/* Top Section: Config & Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column: Configuration */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard title="Target Configuration">
            <TargetConfig />
          </GlassCard>

          <GlassCard title="Load Settings">
            <div className="space-y-6">
              <LoadTypeSelector loadType={loadType} setLoadType={setLoadType} />

              <div className="p-4 rounded-xl bg-secondary dark:bg-white/5 border border-white/10">
                {loadType === "cpu" && <CpuControls setParams={setParams} />}
                {loadType === "memory" && <MemoryControls setParams={setParams} />}
                {loadType === "network" && <NetworkControls setParams={setParams} />}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Execution & Status */}
        <div className="space-y-6">
          <GlassCard title="System Status">
            <div className="flex flex-col items-center justify-center py-4">
              <StatusPanel status={status} />
            </div>
          </GlassCard>

          <GlassCard title="Execution Control">
            <div className="space-y-6">
              <DurationInput onChange={setDuration} />

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="primary"
                  onClick={() => setStatus("RUNNING")}
                  disabled={isRunning}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isRunning ? "Running..." : "Start Load"}
                </Button>

                <Button
                  variant="danger"
                  onClick={() => setStatus("STOPPED")}
                  disabled={!isRunning}
                  className="w-full"
                >
                  Stop
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Bottom Section: Charts & Preview */}
      <GlassCard title="Live Metrics">
        {loadType === "cpu" && <LoadChart status={status} />}
        {loadType === "memory" && <MemoryChart status={status} />}
        {loadType === "network" && <NetworkChart status={status} />}
      </GlassCard>

      <GlassCard title="Command Preview">
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-green-400 overflow-x-auto shadow-inner">
          <CommandPreview command={command} />
        </div>
      </GlassCard>
    </div>
  );
}
