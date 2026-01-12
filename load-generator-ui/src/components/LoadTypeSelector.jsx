export default function LoadTypeSelector({ loadType, setLoadType }) {
  const types = ["cpu", "memory", "network"];

  return (
    <div className="flex gap-3">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => setLoadType(type)}
          className={`px-4 py-2 rounded-md border text-sm font-medium
            ${
              loadType === type
                ? "bg-primary text-white border-primary"
                : "bg-white dark:bg-darkCard border-gray-300 dark:border-gray-600"
            }`}
        >
          {type.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
