import SegmentedControl from "./ui/SegmentedControl";

export default function LoadTypeSelector({ loadType, setLoadType }) {
  const options = [
    { label: "CPU Load", value: "cpu" },
    { label: "Memory Allocation", value: "memory" },
    { label: "Network Traffic", value: "network" },
  ];

  return (
    <div className="w-full">
      <SegmentedControl
        options={options}
        selected={loadType}
        onChange={setLoadType}
      />
    </div>
  );
}
