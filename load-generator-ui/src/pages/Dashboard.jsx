import { useState } from "react";
import TargetConfig from "../components/TargetConfig";
import LoadTypeSelector from "../components/LoadTypeSelector";
import CpuControls from "../components/controls/CpuControls";
import MemoryControls from "../components/controls/MemoryControls";
import NetworkControls from "../components/controls/NetworkControls";
import DurationInput from "../components/DurationInput";
import StatusPanel from "../components/StatusPanel";

function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-darkCard rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-primary mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Dashboard() {
  const [loadType, setLoadType] = useState("cpu");
  const [status, setStatus] = useState("IDLE");

  return (
    <div className="space-y-8">
      {/* TITLE */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary">
          Load Generator System
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Threshold-Based Load Generator for Load Balancer System
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Target Configuration">
          <TargetConfig />
        </Card>

        <Card title="Load Type">
          <LoadTypeSelector
            loadType={loadType}
            setLoadType={setLoadType}
          />
        </Card>

        <Card title="Load Parameters">
          {loadType === "cpu" && <CpuControls />}
          {loadType === "memory" && <MemoryControls />}
          {loadType === "network" && <NetworkControls />}
        </Card>

        <Card title="Execution Settings">
          <DurationInput />

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setStatus("RUNNING")}
              className="flex-1 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primaryDark transition"
            >
              ▶ Start Load
            </button>

            <button
              onClick={() => setStatus("STOPPED")}
              className="flex-1 py-2 rounded-lg bg-gray-400 text-white font-semibold hover:bg-gray-500 transition"
            >
              ■ Stop Load
            </button>
          </div>
        </Card>
      </div>

      {/* STATUS */}
      <Card title="System Status">
        <StatusPanel status={status} />
      </Card>
    </div>
  );
}

export default Dashboard;

