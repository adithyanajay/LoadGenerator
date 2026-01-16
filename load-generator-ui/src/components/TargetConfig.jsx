import Input from "./ui/Input";

export default function TargetConfig() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input
        label="Endpoint"
        placeholder="e.g. localhost"
        className="w-full"
      />
      <Input
        label="Port"
        placeholder="8080"
        className="w-full"
      />
    </div>
  );
}
