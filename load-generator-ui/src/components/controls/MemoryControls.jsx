function MemoryControls({ setParams }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Memory Load</h2>
      <input
        type="number"
        placeholder="Size (MB)"
        defaultValue={256}
        onChange={(e) =>
          setParams({ size_mb: Number(e.target.value) })
        }
        className="border p-2 w-full"
      />
    </div>
  );
}

export default MemoryControls;
