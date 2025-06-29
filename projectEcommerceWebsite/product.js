const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

const products = [
  {
    id: 1,
    name: "White Sneaker",
    price: 69.99,
    img: "images/sneaker-white.jpg",
    description: "Classic white sneaker for casual and sportswear."
  },
  {
    id: 2,
    name: "Grey Runner",
    price: 85.50,
    img: "images/sneaker-grey.jpg",
    description: "Comfortable grey running shoes with modern design."
  },
  {
    id: 3,
    name: "Black Dress Shoe",
    price: 120.00,
    img: "images/dress-black.jpg",
    description: "Elegant black dress shoe perfect for formal events."
  },
  {
    id: 4,
    name: "Brown Leather Sneaker",
    price: 99.99,
    img: "images/sneaker-brown.jpg",
    description: "Stylish brown sneakers made from genuine leather."
  }
];

const product = products.find(p => p.id === productId);
const container = document.getElementById("product-details");

if (product) {
  container.innerHTML = `
    <div class="product-card">
      <img src="${product.img}" alt="${product.name}">
      <div class="info">
        <h2>${product.name}</h2>
        <p>₹${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    </div>
  `;
} else {
  container.innerHTML = "<p>Product not found.</p>";
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}
