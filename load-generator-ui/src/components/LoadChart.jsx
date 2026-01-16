import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
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
          ...prev.slice(-20),
          { time: nextTime, cpu: nextCpu },
        ];
      });
    }, 1000);

    return () => clearInterval(id);
  }, [status]);

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#EBE7F5" vertical={false} />
          <XAxis
            dataKey="time"
            stroke="#2B1E3F"
            tick={{ fill: '#2B1E3F', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            domain={[0, 100]}
            stroke="#2B1E3F"
            tick={{ fill: '#2B1E3F', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.5)',
              borderRadius: '16px',
              padding: '12px',
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
              color: '#2B1E3F'
            }}
            itemStyle={{ color: '#2B1E3F', fontWeight: 600 }}
          />
          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#8B5CF6"
            strokeWidth={3}
            dot={{ r: 4, fill: "#8B5CF6", strokeWidth: 0 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
            animationDuration={500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
