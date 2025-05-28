type EventName = "user:created" | "user:deleted" | "order:placed";

type EventPayloads = {
  "user:created": { id: number; name: string };
  "user:deleted": { id: number };
  "order:placed": { orderId: string; total: number };
};

type EventPayload<T extends EventName> = T extends keyof EventPayloads
  ? EventPayloads[T]
  : never;

function handleEvent<T extends EventName>(event: T, payload: EventPayload<T>) {
  console.log(`Handling event: ${event}`);
  console.log("Payload:", payload);
}

handleEvent("user:created", { id: 1, name: "Alice" });
handleEvent("user:deleted", { id: 42 });
handleEvent("order:placed", { orderId: "xyz", total: 250 });
