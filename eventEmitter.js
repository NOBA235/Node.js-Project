/*
A way where one object (publisher) notifies many other objects (subscribers) automatically when something changes.

Simple idea:

Observer (listener) → waits for an event

Subject (emitter) → sends/announces the event

In Node.js:

This is built-in using the EventEmitter.
 */

//example  
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Observer (listener)
emitter.on('message', () => {
  console.log('Message received!');
});

// Subject (emitter)
emitter.emit('message');


/*Mini real life analogy project
Example: Order System (E-commerce)

When a user places an order:

Send email 📧

Update inventory 📦

Notify admin 👨‍💻

Instead of writing everything in one place, we use observers.*/

const EventEmitter = require('events');

const orderSystem = new EventEmitter();

// 🟢 Observers (subscribers)

// Send email
orderSystem.on('orderPlaced', (order) => {
  console.log(`📧 Email sent to ${order.user}`);
});

// Update inventory
orderSystem.on('orderPlaced', (order) => {
  console.log(`📦 Inventory updated for ${order.product}`);
});

// Notify admin
orderSystem.on('orderPlaced', (order) => {
  console.log(`👨‍💻 Admin notified about order ${order.id}`);
});


// 🔴 Subject (event trigger)

function placeOrder(order) {
  console.log("🛒 Order placed!");

  // Notify all observers
  orderSystem.emit('orderPlaced', order);
}


// 🚀 Run
placeOrder({
  id: 101,
  user: "Noba",
  product: "Laptop"
});
