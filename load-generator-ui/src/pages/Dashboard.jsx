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

function Card({ title, children }) {
  return (
    <section className="bg-lightCard dark:bg-darkCard border border-gray-200 dark:border-gray-700 rounded-xl p-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Dashboard() {
  const [loadType, setLoadType] = useState("cpu");
  const [status, setStatus] = useState("IDLE");
  const [params, setParams] = useState({});
  const [duration, setDuration] = useState("");

  const command = buildStressCommand(loadType, params, duration);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Load Generator System</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Threshold-Based Load Generator for Load Balancer System
        </p>
      </div>

      <Card title="Target Configuration">
        <TargetConfig />
      </Card>

      <Card title="Load Type">
        <LoadTypeSelector loadType={loadType} setLoadType={setLoadType} />
      </Card>

      <Card title="Load Parameters">
        {loadType === "cpu" && <CpuControls setParams={setParams} />}
        {loadType === "memory" && <MemoryControls setParams={setParams} />}
        {loadType === "network" && <NetworkControls setParams={setParams} />}
      </Card>

      <Card title="Execution Settings">
        <DurationInput onChange={setDuration} />

        <div className="flex gap-4 mt-5">
          <button
            onClick={() => setStatus("RUNNING")}
            className="flex-1 bg-primary text-white py-2 rounded-md"
          >
            ▶ Start Load
          </button>

          <button
            onClick={() => setStatus("STOPPED")}
            className="flex-1 bg-gray-300 dark:bg-gray-600 py-2 rounded-md"
          >
            ■ Stop Load
          </button>
        </div>
      </Card>

      <Card title="System Status">
        <StatusPanel status={status} />
      </Card>

      <Card title="stress-ng Command Preview">
        <CommandPreview command={command} />
      </Card>

      {loadType === "cpu" && (
        <Card title="CPU Load Preview (Live)">
          <LoadChart status={status} />
        </Card>
      )}

      {loadType === "memory" && (
        <Card title="Memory Load Preview (Live)">
          <MemoryChart status={status} />
        </Card>
      )}

      {loadType === "network" && (
        <Card title="Network Load Preview (Live)">
          <NetworkChart status={status} />
        </Card>
      )}
    </div>
  );
}
