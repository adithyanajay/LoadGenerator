export function buildStressCommand(loadType, params, duration) {
  if (!duration) return "";

  let base = `stress-ng --timeout ${duration}s`;

  switch (loadType) {
    case "cpu":
      if (!params.cpuThreads) return base;
      return `${base} --cpu ${params.cpuThreads}`;

    case "memory":
      if (!params.memoryMB) return base;
      return `${base} --vm 1 --vm-bytes ${params.memoryMB}M`;

    case "network":
      if (!params.connections) return base;
      return `${base} --sock ${params.connections}`;

    default:
      return base;
  }
}
