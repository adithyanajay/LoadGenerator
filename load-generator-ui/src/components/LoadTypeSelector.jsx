function LoadTypeSelector({ loadType, setLoadType }) {
  const types = ["cpu", "memory", "network"];

  return (
    <div>
      <h2 className="font-semibold text-gray-700 mb-2">Load Type</h2>
      <div className="flex gap-3">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setLoadType(type)}
            className={`px-5 py-2 rounded-full font-medium transition
              ${
                loadType === type
                  ? "bg-purple-600 text-white shadow"
                  : "bg-purple-100 text-purple-700 hover:bg-purple-200"
              }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LoadTypeSelector;
