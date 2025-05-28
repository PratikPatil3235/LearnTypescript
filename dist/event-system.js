"use strict";
function handleEvent(event, payload) {
    console.log(`Handling event: ${event}`);
    console.log("Payload:", payload);
}
handleEvent("user:created", { id: 1, name: "Alice" });
handleEvent("user:deleted", { id: 42 });
handleEvent("order:placed", { orderId: "xyz", total: 250 });
