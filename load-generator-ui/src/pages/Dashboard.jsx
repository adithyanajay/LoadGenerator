// src/pages/Dashboard.jsx

import { useState } from "react"
import TargetConfig from "../components/TargetConfig"
import LoadTypeSelector from "../components/LoadTypeSelector"
import CpuControls from "../components/controls/CpuControls"
import MemoryControls from "../components/controls/MemoryControls"
import NetworkControls from "../components/controls/NetworkControls"
import StatusPanel from "../components/StatusPanel"
import GlassCard from "../components/ui/GlassCard"
import Button from "../components/ui/Button"
import SessionPanel from "../components/SessionPanel"
import { startLoad } from "../services/api"

export default function Dashboard() {
  const [loadType, setLoadType] = useState("cpu")
  const [status, setStatus] = useState("IDLE")
  const [params, setParams] = useState({})
  const [sessions, setSessions] = useState([])

  async function startLoadHandler() {
    const payload = {
      cpu_workers: 0,
      memory_mb: 0,
      network_mbps: 0,
    }

    if (loadType === "cpu") {
      payload.cpu_workers = Number(params.cpuThreads || 0)
    }

    if (loadType === "memory") {
      payload.memory_mb = Number(params.memoryMB || 0)
    }

    setStatus("RUNNING")

    try {
      const res = await startLoad(payload)

      const session = {
        sessionId: res.session_id,
        vmIP: res.vm_ip,
        timeout: res.timeout_seconds,
        type: res.type,
        startedAt: Date.now(),
      }

      setSessions((prev) => [...prev, session])

      // Auto-remove on timeout
      setTimeout(() => {
        setSessions((prev) =>
          prev.filter((s) => s.sessionId !== session.sessionId)
        )
      }, res.timeout_seconds * 1000)

    } catch (err) {
      console.error(err)
      setStatus("ERROR")
    }

    setTimeout(() => {
      setStatus("IDLE")
    }, 800)
  }

  return (
    <div className="max-w-5xl mx-auto pb-10 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-3 space-y-6">
          <GlassCard title="Target Configuration">
            <TargetConfig />
          </GlassCard>

          <GlassCard title="Load Settings">
            <LoadTypeSelector
              loadType={loadType}
              setLoadType={setLoadType}
            />

            <div className="mt-4 p-4 rounded-xl bg-secondary border">
              {loadType === "cpu" && (
                <CpuControls setParams={setParams} />
              )}
              {loadType === "memory" && (
                <MemoryControls setParams={setParams} />
              )}
              {loadType === "network" && (
                <NetworkControls setParams={setParams} />
              )}
            </div>
          </GlassCard>

          <GlassCard title="Execution Control">
            <div className="flex justify-center py-4">
              <StatusPanel status={status} />
            </div>

            <Button
              variant="primary"
              className="w-full"
              onClick={startLoadHandler}
            >
              Start Load
            </Button>
          </GlassCard>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <SessionPanel
            sessions={sessions}
            setSessions={setSessions}
          />
        </div>
      </div>
    </div>
  )
}
