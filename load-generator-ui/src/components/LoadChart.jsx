import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function LoadChart({ status }) {
  const [data, setData] = useState([
    { time: 0, cpu: 20 },
  ]);

  useEffect(() => {
    if (status !== "RUNNING") return;

    const id = setInterval(() => {
      setData((prev) => {
        const nextTime = prev.length;
        const nextCpu = Math.floor(Math.random() * 40 + 40);

        return [
          ...prev.slice(-15),
          { time: nextTime, cpu: nextCpu },
        ];
      });
    }, 1000);

    return () => clearInterval(id);
  }, [status]);

  return (
    <div
      style={{ height: "260px", width: "100%" }}
      className="bg-white dark:bg-darkCard border border-gray-300 dark:border-gray-700 rounded-lg p-4"
    >
      <LineChart width={700} height={220} data={data}>
        <XAxis dataKey="time" stroke="#999" />
        <YAxis domain={[0, 100]} stroke="#999" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="cpu"
          stroke="#7A62CF"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </div>
  );
}
