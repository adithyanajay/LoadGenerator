function CpuControls({ setParams }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">CPU Load</h2>
      <input
        type="number"
        placeholder="Workers"
        defaultValue={2}
        onChange={(e) =>
          setParams({ workers: Number(e.target.value) })
        }
        className="border p-2 w-full"
      />
    </div>
  );
}

export default CpuControls;
