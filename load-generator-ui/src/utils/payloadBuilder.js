export function buildStressNgCommand(type, duration, params) {
  let base = `stress-ng --timeout ${duration}s`;

  if (type === "cpu") {
    return `${base} --cpu ${params.threads}`;
  }

  if (type === "memory") {
    return `${base} --vm 1 --vm-bytes ${params.memory}M`;
  }

  if (type === "network") {
    return `${base} --sock ${params.connections}`;
  }

  return base;
}
