const welcomeTextfield = document.querySelector("#welcome");
const confirmTextfield = document.querySelector("#confirm");
const orderBtn = document.querySelector("#orderBtn");

const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// Welcome message
welcomeTextfield.innerText = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`;

// Order button
orderBtn.onclick = () => {
  let orderName = document.querySelector('input[name="pizza"]:checked').value;
  let orderQuantity = document.querySelector("#quantity").value;
  confirmTextfield.innerText = `Great, I'll get started on your ${orderName}(s) right away, it will cost ${totalCost(orderQuantity)}kr. The pizzas will take ${cookingTime(orderQuantity)} minutes.`;
};

// Helper functions
function checkOrderName(name) {
  return name == vegetarian || name == hawaiian || name == pepperoni;
}

function totalCost(quantity) {
  return quantity * pizzaPrice;
}

function cookingTime(quantity) {
  if (quantity <= 2) return 10;
  if (quantity <= 5) return 15;
  return 20;
}
