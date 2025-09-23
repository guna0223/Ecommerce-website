// Select the card (template)
const card = document.getElementById("card");

// Select the container where we want to insert copies
const container = document.getElementById("container");

// Make 5 copies
for (let i = 1; i <= 5; i++) {
  let copy = card.cloneNode(true); // true = deep clone (with children)
  copy.querySelector("h3").textContent = "Title " + i; // change text
  copy.querySelector("p").textContent = "This is card number " + i;
  container.appendChild(copy);
}

// Hide the original template card
card.style.display = "none";
