export default function CommandPreview({ command }) {
  if (!command) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Configure parameters to generate stress-ng command
      </p>
    );
  }

  return (
    <pre
      className="
        bg-gray-100 dark:bg-[#111827]
        border border-gray-300 dark:border-gray-700
        rounded-md p-3 text-sm
        text-purple-700 dark:text-purple-400
        overflow-x-auto
      "
    >
      {command}
    </pre>
  );
}
