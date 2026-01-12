export default function TargetConfig() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm text-gray-500">Endpoint</label>
        <input
          placeholder="e.g. localhost"
          className="w-full mt-1 px-3 py-2 rounded-md border
          bg-white dark:bg-[#161629]
          border-gray-300 dark:border-gray-600"
        />
      </div>

      <div>
        <label className="text-sm text-gray-500">Port</label>
        <input
          placeholder="8080"
          className="w-full mt-1 px-3 py-2 rounded-md border
          bg-white dark:bg-[#161629]
          border-gray-300 dark:border-gray-600"
        />
      </div>
    </div>
  );
}
