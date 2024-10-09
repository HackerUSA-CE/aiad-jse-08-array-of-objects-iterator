
// Step 1: Creating an array of gadget objects
const gadgets = [
  { name: "Smartphone", brand: "Brand A", price: 999, features: ["Touchscreen", "GPS", "Camera"], inStock: true },
  { name: "Laptop", brand: "Brand B", price: 1499, features: ["Keyboard", "WiFi", "Bluetooth"], inStock: false },
  { name: "Tablet", brand: "Brand C", price: 499, features: ["Touchscreen", "WiFi", "Camera"], inStock: true }
];

console.log(gadgets); // Expected output: the entire array of gadget objects

// Step 2: Using .forEach() to display each gadget's name and brand
gadgets.forEach(gadget => {
  console.log(`${gadget.name} is manufactured by ${gadget.brand}.`);
});

// Step 3: Using .map() to create an array of gadget names
const gadgetNames = gadgets.map(gadget => gadget.name);
console.log(gadgetNames); // Expected output: ["Smartphone", "Laptop", "Tablet"]

// Step 4: Using .filter() to find all available gadgets
const availableGadgets = gadgets.filter(gadget => gadget.inStock);
console.log(availableGadgets); // Expected output: [{ name: 'Smartphone', ... }, { name: 'Tablet', ... }]

// Step 5: Filtering for available gadgets and mapping their names
const availableGadgetNames = gadgets
  .filter(gadget => gadget.inStock)
  .map(gadget => gadget.name);
console.log(availableGadgetNames); // Expected output: ["Smartphone", "Tablet"]

// Step 6: Filtering for available gadgets, sorting them by price, and mapping their names
const sortedAvailableGadgets = gadgets
  .filter(gadget => gadget.inStock)
  .sort((a, b) => a.price - b.price)
  .map(gadget => gadget.name);

console.log(sortedAvailableGadgets); // Expected output: ["Tablet", "Smartphone"]





