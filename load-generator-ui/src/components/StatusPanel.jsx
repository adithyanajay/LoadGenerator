export default function StatusPanel({ status }) {
  const color =
    status === "RUNNING"
      ? "text-green-500"
      : status === "STOPPED"
      ? "text-red-500"
      : "text-gray-500";

  return (
    <div className={`font-semibold ${color}`}>
      {status}
    </div>
  );
}
