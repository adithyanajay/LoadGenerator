export const startLoad = async (payload) => {
  console.log("Starting load...", payload);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ status: "started" }), 500)
  );
};

export const stopLoad = async () => {
  console.log("Stopping load...");
  return new Promise((resolve) =>
    setTimeout(() => resolve({ status: "stopped" }), 300)
  );
};
