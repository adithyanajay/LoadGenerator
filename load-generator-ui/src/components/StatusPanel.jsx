function StatusPanel({ status }) {
  const color =
    status === "RUNNING"
      ? "text-green-600 dark:text-green-400"
      : status === "STOPPED"
      ? "text-red-600 dark:text-red-400"
      : "text-gray-600 dark:text-gray-400";

  return (
    <div>
      <p className={`text-lg font-bold ${color}`}>{status}</p>
    </div>
  );
}

export default StatusPanel;
