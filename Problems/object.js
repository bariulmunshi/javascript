/* Problem-1: Find the cheapest phone from an array of phone objects */
/* const phones = [{
        name: "Motorwola A3",
        price: 1500,
        Processor: "G870",
        ram: "8gb",
        rom: "120",
    },
    {
        name: "Samsung A3",
        price: 1900,
        Processor: "G870",
        ram: "8gb",
        rom: "120",
    },
    {
        name: "Iphone A3",
        price: 5500,
        Processor: "G870",
        ram: "8gb",
        rom: "120",
    },
    {
        name: "Xiaomi A3",
        price: 10500,
        Processor: "G870",
        ram: "8gb",
        rom: "120",
    },
    {
        name: "RealMe A3",
        price: 15000,
        Processor: "G870",
        ram: "8gb",
        rom: "120",
    },
];
let cheapest = phones[0];
for (const phone of phones) {
    // compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);  */
/* Problem-2:Calculate the total cost of the products in a shopping cart 
const products = [
    { name: "Laptop", price: 100000 },
    { name: "Mobile", price: 100000 },
    { name: "Dress", price: 100000 },
    { name: "Camera", price: 100000 },
];
let totalCost = 0;
for (const product of products) {
    totalCost = totalCost + product.price;
}
console.log(totalCost);*/

/* Problem-3:Calculate the total cost of the products in a shopping cart */
const cart = [
    { name: "Laptop", price: 100000, Quantity: 2 },
    { name: "Mobile", price: 100000, Quantity: 9 },
    { name: "Bike", price: 200000, Quantity: 10 },
    { name: "Camera", price: 100000, Quantity: 13 },
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    cartTotal = cartTotal + product.price * product.Quantity;
}
console.log(cartTotal);