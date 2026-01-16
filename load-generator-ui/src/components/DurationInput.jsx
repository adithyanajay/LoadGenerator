import Input from "./ui/Input";

export default function DurationInput({ onChange }) {
  return (
    <Input
      type="number"
      label="Duration (seconds)"
      placeholder="e.g. 60"
      onChange={(e) => onChange(e.target.value)}
      className="w-full"
    />
  );
}
