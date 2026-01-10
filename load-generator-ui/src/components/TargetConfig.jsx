function TargetConfig() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <input
        placeholder="Endpoint (e.g. localhost)"
        className="
          px-4 py-2 rounded-xl
          bg-gray-50 dark:bg-[#26264a]
          text-gray-900 dark:text-white
          border border-gray-300 dark:border-gray-600
          outline-none focus:ring-2 focus:ring-primary
        "
      />
      <input
        placeholder="Port"
        className="
          px-4 py-2 rounded-xl
          bg-gray-50 dark:bg-[#26264a]
          text-gray-900 dark:text-white
          border border-gray-300 dark:border-gray-600
          outline-none focus:ring-2 focus:ring-primary
        "
      />
    </div>
  );
}

export default TargetConfig;
