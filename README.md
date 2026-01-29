# Load Generator UI – DynamiQ Project

A **React + Tailwind CSS + Go** based frontend + backend software used to configure and initiate stress tests for the **DynamiQ: Threshold-Based Load Balancer** system.

This Load Generator acts as a **client-side controller** that sends load configuration parameters (CPU, Memory, Request patterns) to the Load Balancer, which then distributes the load across virtual machines (VMs) using a dual-threshold auto-scaling strategy.

---

##  Project Context

The Load Generator module is part of the **DynamiQ: Threshold-Based Load Balancer** major project.

**Role of this module:**
- Provides a user interface to configure stress tests
- Sends stress configuration to the Load Balancer
- Visualizes CPU and Memory usage trends (frontend-simulated)
- Does **not** generate load itself

---

##  Features

-  Configure stress parameters:
  - CPU Load (%)
  - Memory Load (MB)
  - Number of Requests
  - Request Interval (ms)
-  Start / ⏹ Stop stress tests
-  stress-ng command mapping (logical simulation)
-  Live CPU & Memory usage charts (mocked data)
-  Clean and responsive UI using Tailwind CSS
-  Modular React component architecture
-  Backend-independent (mock API for demo & testing)

---

##  Tech Stack

| Technology | Purpose |
|---------|--------|
| React (Vite) | Frontend framework |
| Tailwind CSS | Styling |
| Go | Backend |
| Recharts | CPU & Memory trend visualization |
| Node.js | Development environment |
| npm | Package management |


---

##  Installation & Setup

### Prerequisites
- Node.js (v20 LTS recommended)
- npm

### Steps

```bash
# Clone the repository
git clone repo-url

# Navigate to frontend folder
cd load-generator-ui

# Install dependencies
npm install

# Start development server
npm run dev


