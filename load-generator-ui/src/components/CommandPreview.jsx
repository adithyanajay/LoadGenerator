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
        bg-white/50 backdrop-blur-sm
        border border-gray-200
        rounded-md p-3 text-sm
        text-accent font-mono
        overflow-x-auto
      "
    >
      {command}
    </pre>
  );
}
