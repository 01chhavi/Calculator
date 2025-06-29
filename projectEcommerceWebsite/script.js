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

const container = document.getElementById("product-container");
const searchBar = document.getElementById("searchBar");
const cartCount = document.getElementById("cart-count");

function renderProducts(productList) {
  container.innerHTML = "";
  productList.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="info">
        <h2>${p.name}</h2>
        <p>₹${p.price.toFixed(2)}</p>
        <p><small>${p.description}</small></p>
        <a href="product.html?id=${p.id}"><button>View Details</button></a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Filter on search
searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  renderProducts(filtered);
});

// Cart from localStorage
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCount.textContent = cart.length;
}

updateCartCount();
renderProducts(products);
