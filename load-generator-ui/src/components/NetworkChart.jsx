import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function NetworkChart({ status }) {
  const [data, setData] = useState([{ time: 0, conn: 5 }]);

  useEffect(() => {
    if (status !== "RUNNING") return;

    const id = setInterval(() => {
      setData((prev) => {
        const nextTime = prev.length;
        const nextConn = Math.floor(Math.random() * 50 + 20);
        return [...prev.slice(-15), { time: nextTime, conn: nextConn }];
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
          dataKey="conn"
          stroke="#3B82F6"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </div>
  );
}
