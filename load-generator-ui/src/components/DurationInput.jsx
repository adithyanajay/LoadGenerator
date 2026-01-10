function DurationInput({ duration, setDuration }) {
  return (
    <div className="space-y-2">
      <h2 className="font-semibold text-gray-700">Duration (seconds)</h2>
      <input
        type="number"
        min="1"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default DurationInput;
