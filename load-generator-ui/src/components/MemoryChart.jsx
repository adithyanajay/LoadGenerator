import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function MemoryChart({ status }) {
  const [data, setData] = useState([{ time: 0, mem: 100 }]);

  useEffect(() => {
    if (status !== "RUNNING") return;

    const id = setInterval(() => {
      setData((prev) => {
        const nextTime = prev.length;
        const nextMem = Math.floor(Math.random() * 500 + 300); // 300–800 MB
        return [...prev.slice(-15), { time: nextTime, mem: nextMem }];
      });
    }, 1000);

    return () => clearInterval(id);
  }, [status]);

  return (
    <div style={{ height: 260 }}>
      <LineChart width={700} height={220} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line
          dataKey="mem"
          stroke="#10B981"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </div>
  );
}
