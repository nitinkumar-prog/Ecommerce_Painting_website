const text = "Discover original handmade paintings crafted with passion and creativity.";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

  let item = {
    name: name,
    price: price
  };

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart 🛒");
}