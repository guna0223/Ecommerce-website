
const products = [
  {
    title: "Camera",
    description: "To take pic",
    price: 20000,
    img: "camer.jpg",
    discount: 40000,
    off: 50
  },
  {
    title: "Mobile",
    description: "To play game",
    price: 20000,
    img: "mobile.jpg",
    discount: 40000,
    off: 50
  },
  {
    title: "Pro",
    description: "To show big screen",
    price: 20000,
    img: "pro.jpg",
    discount: 40000,
    off: 50
  },
  {
    title: "Samsung mobile",
    description: "To use camera",
    price: 20000,
    img: "s24.jpg",
    discount: 40000,
    off: 50
  },
  {
    title: "TV",
    description: "To see movie in big screen",
    price: 20000,
    img: "tv.jpg",
    discount: 40000,
    off: 50
  },
  {
    title: "TWS",
    description: "Enjoy the sound",
    price: 20000,
    img: "tws.jpg",
    discount: 40000,
    off: 50
  },
  {
    title: "Vivo",
    description: "Enjoy mobile",
    price: 20000,
    img: "vivo.jpg",
    discount: 40000,
    off: 50
  },
  {
    title: "VR",
    description: "Enjoy vr",
    price: 20000,
    img: "vr.jpg",
    discount: 40000,
    off: 50
  },
  {
    title: "Pilgrim",
    description: "Advanced Hair Growth Serum",
    price: 297,
    img: "serum.webp",
    discount: 400,
    off: 50
  },
  {
    title: "Nerf 2.0",
    description: "Elite 2.0 Commander",
    price: 917,
    img: "gun.jpeg",
    discount: 1500,
    off: 50
  },
  {
    title: "COSCO",
    description: "Robona Pro Football",
    price: 645,
    img: "football.jpeg",
    discount: 1000,
    off: 50
  },
];

const container = document.querySelector(".row");

products.forEach((product, index) => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
  col.innerHTML = `
    <div class="card border-0 shadow-sm h-100 product-card overflow-hidden position-relative">
      <div class="image-container overflow-hidden">
        <img src="static/img/product/${product.img}" 
             class="card-img-top product-img" 
             alt="${product.title}">
      </div>
      
      <div class="card-body text-start">
        <h5 class="card-title fw-bold text-dark mb-2">${product.title}</h5>
        <p class="card-text text-muted small">${product.description}</p>
        <div class="price-info mb-3">
          <span class="fw-bold text-dark fs-5">₹${product.price}</span>
          <small class="text-decoration-line-through text-secondary ms-2">₹${product.discount}</small>
          <span class="badge bg-danger ms-2">${product.off}% OFF</span>
        </div>
        <button class="btn btn-dark w-100 add-to-cart"
                data-name="${product.title}"
                data-price="${product.price}"
                data-img="static/img/product/${product.img}">
          <i class="bi bi-cart me-1"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
  container.appendChild(col);
});


let cart = [];

const offcanvasBody = document.querySelector(".offcanvas-body");
offcanvasBody.innerHTML = `
  <div id="cart-items"></div>
  <hr>
  <div class="d-flex justify-content-between align-items-center">
    <strong>Total:</strong>
    <strong id="cart-total">₹0</strong>
  </div>
`;

const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// --- Add to Cart Functionality ---
document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = parseInt(btn.dataset.price);
    const img = btn.dataset.img;

    // check if already exists
    const existing = cart.find((item) => item.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, img, qty: 1 });
    }

    updateCart();

    // Show alert message
    // alert(`${name} added to cart!`);

    // Show offcanvas cart
    const offcanvas = new bootstrap.Offcanvas(document.getElementById("peace"));
    offcanvas.show();
  });
});

// --- Update Cart Display ---
function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p>Your cart is empty.</p>`;
    cartTotal.textContent = "₹0";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.classList.add("d-flex", "align-items-center", "justify-content-between", "mb-3");
    div.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.img}" alt="${item.name}" width="60" height="60" class="me-3 rounded">
        <div>
          <h6 class="mb-1">${item.name}</h6>
          <p class="mb-0">₹${item.price}</p>
          
        </div>
      </div>
      <div class="text-end">
        <button class="btn btn-sm btn-outline-secondary me-1" onclick="changeQty(${index}, -1)">−</button>
        <span>${item.qty}</span>
        <button class="btn btn-sm btn-outline-secondary ms-1" onclick="changeQty(${index}, 1)">+</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);


  });
  cartTotal.textContent = "₹" + total;

}


function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCart();
}


// alert message

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// Example usage
showToast(`${name} added to cart!`);
