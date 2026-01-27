import { useState } from "react";
import TargetConfig from "../components/TargetConfig";
import LoadTypeSelector from "../components/LoadTypeSelector";
import CpuControls from "../components/controls/CpuControls";
import MemoryControls from "../components/controls/MemoryControls";
import NetworkControls from "../components/controls/NetworkControls";
import StatusPanel from "../components/StatusPanel";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";

const BACKEND_URL = "http://localhost:9000/api/v1/load";
// 🔴 change to VM IP when deployed

export default function Dashboard() {
  const [loadType, setLoadType] = useState("cpu");
  const [status, setStatus] = useState("IDLE");
  const [params, setParams] = useState({});

  async function startLoad() {
    const payload = {
      cpu_workers: 0,
      memory_mb: 0,
      network_mbps: 0,
    };

    if (loadType === "cpu") {
      payload.cpu_workers = Number(params.cpuThreads || 0);
    }

    if (loadType === "memory") {
      payload.memory_mb = Number(params.memoryMB || 0);
    }

    // Visual feedback only (non-blocking)
    setStatus("RUNNING");

    // Fire-and-forget request
    fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.error(err);
      setStatus("ERROR");
    });

    // Reset status quickly (do NOT wait for backend)
    setTimeout(() => {
      setStatus("IDLE");
    }, 800);
  }

  return (
    <div className="max-w-4xl mx-auto pb-10 space-y-8">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Configuration */}
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

        {/* Status & Control */}
        <div className="space-y-6">
          <GlassCard title="System Status">
            <div className="flex flex-col items-center justify-center py-4">
              <StatusPanel status={status} />
            </div>
          </GlassCard>

          <GlassCard title="Execution Control">
            <Button
              variant="primary"
              onClick={startLoad}
              className="w-full"
            >
              Start Load
            </Button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

