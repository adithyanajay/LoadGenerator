// src/services/api.js

const LOAD_BALANCER_URL = "http://98.92.116.72:8080/api/v1/load"

export async function startLoad(payload) {
  const res = await fetch(LOAD_BALANCER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new Error("Failed to start load")
  }

  // MUST return: session_id, vm_ip, timeout_seconds, type
  return res.json()
}

export async function stopLoad(vmIP, sessionId) {
  // 🔥 DIRECT VM COMMUNICATION
  const url = `http://${vmIP}:9000/api/v1/stop/${sessionId}`

  await fetch(url, {
    method: "POST",
  })
}

export async function stopAllLoads(sessions) {
  await Promise.all(
    sessions.map((s) =>
      fetch(`http://${s.vmIP}:9000/api/v1/stop/${s.sessionId}`, {
        method: "POST",
      })
    )
  )
}
