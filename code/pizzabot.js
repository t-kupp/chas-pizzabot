const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// Greeting the user
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

// Get user order
let orderName;
while (!checkOrderName(orderName)) {
  orderName = prompt("Enter the name of the pizza you want to order today.", "Pepperoni Pizza");
}

let orderQuantity = 0;
while (orderQuantity < 1 || orderQuantity > 10 || isNaN(orderQuantity)) {
  orderQuantity = prompt(`How many of ${orderName} do you want? (1-10)`, "1");
}

// Confirm message
alert(`Great, I'll get started on your ${orderName}(s) right away, it will cost ${calculateTotal(orderQuantity)}kr. The pizza(s) will take ${calculateCookingTime(orderQuantity)} minutes.`);

// Helper functions
function checkOrderName(name) {
  return name == vegetarian || name == hawaiian || name == pepperoni;
}

function calculateTotal(quantity) {
  return quantity * pizzaPrice;
}

function calculateCookingTime(quantity) {
  if (quantity <= 2) return 10;
  if (quantity <= 5) return 15;
  return 20;
}
