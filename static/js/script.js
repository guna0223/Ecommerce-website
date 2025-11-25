/* ============ PRODUCT DATA ============ */
const products = [
  { title: "Camera", description: "To take pictures", price: 20000, img: "camer.jpg", discount: 40000, off: 50 },
  { title: "Mobile", description: "To play games", price: 20000, img: "mobile.jpg", discount: 40000, off: 50 },
  { title: "Pro", description: "Big screen device", price: 20000, img: "pro.jpg", discount: 40000, off: 50 },
  { title: "Samsung Mobile", description: "High-quality camera", price: 20000, img: "s24.jpg", discount: 40000, off: 50 },
  { title: "TV", description: "Watch movies", price: 20000, img: "tv.jpg", discount: 40000, off: 50 },
  { title: "TWS", description: "Wireless sound", price: 20000, img: "tws.jpg", discount: 40000, off: 50 },
  { title: "Vivo", description: "Smooth mobile", price: 20000, img: "vivo.jpg", discount: 40000, off: 50 },
  { title: "VR", description: "VR experience", price: 20000, img: "vr.jpg", discount: 40000, off: 50 },
  { title: "Pilgrim Serum", description: "Hair Growth Serum", price: 297, img: "serum.webp", discount: 400, off: 50 },
  { title: "Nerf 2.0 Gun", description: "Elite toy gun", price: 917, img: "gun.jpeg", discount: 1500, off: 50 },
  { title: "COSCO Football", description: "Robona Pro Ball", price: 645, img: "football.jpeg", discount: 1000, off: 50 }
];

/* Render products */
const container = document.querySelector(".row");

products.forEach(p => {
  container.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="product-card p-2">
        <img src="static/img/product/${p.img}" class="product-img">
        <div class="p-3">
          <h5 class="fw-bold">${p.title}</h5>
          <p class="text-muted small">${p.description}</p>

          <div class="d-flex align-items-center gap-2">
            <span class="fw-bold fs-5">₹${p.price}</span>
            <small class="text-decoration-line-through text-secondary">₹${p.discount}</small>
            <span class="badge bg-danger">${p.off}% OFF</span>
          </div>

          <button class="btn add-to-cart w-100 mt-3"
            data-name="${p.title}"
            data-price="${p.price}"
            data-img="static/img/product/${p.img}">
            <i class="bi bi-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
});

/* ============ CART SYSTEM ============ */
let cart = [];

const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

/* Add to cart */
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("add-to-cart")) return;

  const name = e.target.dataset.name;
  const price = parseInt(e.target.dataset.price);
  const img = e.target.dataset.img;

  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }

  updateCart();
  showToast(`${name} added to cart!`);

  new bootstrap.Offcanvas("#cartCanvas").show();
});

/* Update cart UI */
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

    cartItemsContainer.innerHTML += `
      <div class="cart-item d-flex justify-content-between mb-3">
        <div class="d-flex align-items-center">
          <img src="${item.img}" width="60" height="60" class="rounded me-3">
          <div>
            <h6>${item.name}</h6>
            <p class="text-muted small m-0">₹${item.price}</p>
          </div>
        </div>

        <div>
          <button class="btn btn-sm btn-outline-dark" onclick="changeQty(${index}, -1)">−</button>
          <span class="mx-2">${item.qty}</span>
          <button class="btn btn-sm btn-outline-dark" onclick="changeQty(${index}, 1)">+</button>
        </div>
      </div>
    `;
  });

  cartTotal.textContent = "₹" + total;
}

function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCart();
}

/* Toast Notification */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
