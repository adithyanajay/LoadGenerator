// src/components/SessionPanel.jsx

import { stopLoad, stopAllLoads } from "../services/api"
import GlassCard from "./ui/GlassCard"
import Button from "./ui/Button"

export default function SessionPanel({ sessions, setSessions }) {
  async function handleStop(session) {
    try {
      await stopLoad(session.vmIP, session.sessionId)
    } catch (err) {
      console.error(err)
    }

    setSessions((prev) =>
      prev.filter((s) => s.sessionId !== session.sessionId)
    )
  }

  async function handleStopAll() {
    try {
      await stopAllLoads(sessions)
    } catch (err) {
      console.error(err)
    }

    setSessions([])
  }

  return (
    <GlassCard title="Active Load Sessions">
      {sessions.length === 0 ? (
        <p className="text-sm text-gray-500 italic">
          No active load sessions
        </p>
      ) : (
        <div className="space-y-3">
          {sessions.map((s) => (
            <div
              key={s.sessionId}
              className="flex justify-between items-center p-3 rounded-lg bg-white/60 border"
            >
              <div className="text-sm">
                <p className="font-mono font-semibold">
                  {s.type.toUpperCase()}
                </p>
                <p className="text-xs text-gray-500">
                  VM: {s.vmIP}
                </p>
                <p className="text-xs text-gray-400">
                  Session: {s.sessionId}
                </p>
              </div>

              <Button
                variant="danger"
                onClick={() => handleStop(s)}
              >
                Stop
              </Button>
            </div>
          ))}

          <Button
            variant="danger"
            className="w-full mt-2"
            onClick={handleStopAll}
          >
            Stop All
          </Button>
        </div>
      )}
    </GlassCard>
  )
}
