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