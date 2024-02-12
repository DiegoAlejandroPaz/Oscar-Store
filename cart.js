let cart = [];

function renderCart() {
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");
  let html = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let itemTotal = item.price * item.quantity;
    html += "<li>" + item.name + " - $" + item.price.toFixed(2) + " x " + item.quantity + " = $" + itemTotal.toFixed(2) + "</li>";
    total += itemTotal;
  }
  cartItems.innerHTML = html;
  cartTotal.innerHTML = total.toFixed(2);
}

renderCart();
