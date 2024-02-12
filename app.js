// Add to cart function
function addToCart() {
    // Get product information from the HTML
    let name = document.getElementById("product-name").textContent;
    let price = parseFloat(document.getElementById("product-price").textContent.slice(1));
    let size = document.getElementById("product-size").value;
  
    // Get the current cart from localStorage or create an empty cart if it doesn't exist
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
  
    // Create an object representing the item to be added to the cart
    let item = {
      name: name,
      price: price,
      size: size,
      quantity: 1
    };
  
    // Check if the item already exists in the cart
    let existingItem = cart.find((element) => element.name === item.name && element.size === item.size);
  
    // If the item exists, increment its quantity, otherwise add it to the cart
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push(item);
    }
  
    // Store the updated cart in localStorage and display an alert
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  }
  
  // Render cart function
  function renderCart() {
    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart"));
  
    // Get the HTML elements that will display the cart items and total
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
  
    // Initialize variables for generating HTML and calculating total
    let html = "";
    let total = 0;
  
    // Loop through each item in the cart and generate HTML to display it
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i];
      let itemTotal = item.price * item.quantity;
      html += `
        <li>
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          <span class="cart-item-quantity">${item.quantity}</span>
          <span class="cart-item-total">$${itemTotal.toFixed(2)}</span>
          <button class="remove-item-btn" onclick="removeCartItem(${i})">Remove</button>
        </li>
      `;
      total += itemTotal;
    }
  
    // If the cart is empty, display a message to that effect
    if (cart.length === 0) {
      html = "<li>Your cart is empty.</li>";
    }
  
    // Update the HTML elements to display the cart items and total
    cartItems.innerHTML = html;
    cartTotal.innerHTML = total.toFixed(2);
  }
  
  // Remove item function
  function removeCartItem(index) {
    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart"));
  
    // Remove the item at the specified index from the cart
    cart.splice(index, 1);
  
    // Store the updated cart in localStorage and re-render the cart
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  // Checkout function
  function checkout() {
    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart"));
  
    // If the cart is empty, display an alert and return
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
  
    // Do something with the cart (e.g. send it to a server, process payment, etc.)
    // ...
  
    // Clear the cart
    localStorage.removeItem("cart");
  
    // Display a confirmation message
    alert("Thank you for your order!");
  
    // Redirect to the homepage
    window.location.href = "index.html";
  }
  