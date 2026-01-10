function NetworkControls({ setParams }) {
  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <h2 className="font-semibold">Network Load</h2>

      <input
        type="number"
        placeholder="Requests per second"
        defaultValue={100}
        onChange={(e) =>
          setParams((prev) => ({
            ...prev,
            request_rate: Number(e.target.value),
          }))
        }
        className="border p-2 w-full"
      />

      <input
        type="number"
        placeholder="Payload size (bytes)"
        defaultValue={1024}
        onChange={(e) =>
          setParams((prev) => ({
            ...prev,
            payload_size: Number(e.target.value),
          }))
        }
        className="border p-2 w-full"
      />
    </div>
  );
}

export default NetworkControls;
