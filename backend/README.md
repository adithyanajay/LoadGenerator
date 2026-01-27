# Load Generator Backend

This service runs on each VM and generates artificial CPU and memory load
using stress-ng. It is controlled via a REST API and is intended for
demonstration purposes only.

## Key Characteristics

- Stateless
- No authentication
- No safety limits
- No metrics collection
- No load balancer logic

All load regulation is handled externally by the system-monitor and
load balancer components.

## API

POST /api/v1/load

Example:
{
  "cpu_workers": 2,
  "memory_mb": 300,
  "network_mbps": 0
}

Each request spawns independent stress-ng processes that automatically
terminate after 15 seconds.

