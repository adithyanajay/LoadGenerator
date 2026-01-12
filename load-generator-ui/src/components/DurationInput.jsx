export default function DurationInput() {
  return (
    <div>
      <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
        Duration (seconds)
      </label>
      <input
        type="number"
        className="w-full px-3 py-2 rounded-md
          bg-white dark:bg-darkCard
          border border-gray-300 dark:border-gray-600
          text-gray-900 dark:text-white"
      />
    </div>
  );
}
