console.log(global);// This will print a huge object containing built-in stuff

/*
global
✅ Example
console.log(global);

👉 This will print a huge object containing built-in stuff

⚡ Common things inside the global object

1. console
console.log("Hello");

👉 console is part of global — no need to import

2. setTimeout
setTimeout(() => {
  console.log("After 2 sec");
}, 2000);
3. setInterval
setInterval(() => {
  console.log("Running...");
}, 1000);
4. __dirname
console.log(__dirname);

👉 Gives current folder path

5. __filename
console.log(__filename);

👉 Gives current file path

🚨 Important Difference (VERY IMPORTANT)

In browser:

var a = 10;
console.log(window.a); // works

In Node:

var a = 10;
console.log(global.a); // ❌ undefined

👉 Why?

Because:

Node uses modules

Each file is wrapped inside a function

So variables are NOT global by default

🧩 How to make something global (not recommended usually)
global.myVar = "Hello";

console.log(myVar); // works

👉 But ⚠️ avoid this in real projects (bad practice)

🧪 Small demo (try this)
console.log("Dir:", __dirname);
console.log("File:", __filename);

setTimeout(() => {
  console.log("Timeout done");
}, 1000);
🧠 Pro Tip

👉 In modern Node.js:

globalThis is the standard global object

console.log(globalThis === global); // true
🚀 Summary

global = global object in Node.js

You don’t need to import it

But variables are NOT global by default

Node uses module system (important difference from browser)

*/