const greetingTextfield = document.getElementById("greeting");
const confirmTextfield = document.getElementById("confirm");
const orderBtn = document.getElementById("orderBtn");
const quantityInput = document.getElementById("quantity");
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

// Print greeting text with available pizzas
greetingTextfield.innerText = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`;

// Print the order confirmation
orderBtn.onclick = () => {
  const orderName = document.querySelector('input[name="pizza"]:checked').value;
  const orderQuantity = quantityInput.value;
  const totalCost = getTotalCost(pizzaPrice, orderQuantity);
  const cookingTime = getCookingTime(orderQuantity);
  confirmTextfield.innerText = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost} kr. The pizza(s) will take ${cookingTime} minutes.`;
};

// Helper functions
function getTotalCost(price, quantity) {
  return price * quantity;
}

function getCookingTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

// Prevent invalid manual quantity input
quantityInput.addEventListener("input", () => {
  const value = parseInt(quantityInput.value);

  if (value > 10) {
    quantityInput.value = 10;
  } else if (value < 1) {
    quantityInput.value = 1;
  }
});
