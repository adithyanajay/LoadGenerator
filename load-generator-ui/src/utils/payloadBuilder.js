export const buildPayload = (type, target, duration, parameters) => {
  return {
    type,
    target,
    duration_seconds: duration,
    mode: "constant",
    parameters,
  };
};
