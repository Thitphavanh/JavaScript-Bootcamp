const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSetelected = document.getElementById("movie");
let price = +movieSetelected.value;

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelected();
  }
});

movieSetelected.addEventListener("change", (e) => {
  price = +e.target.value;
  updateSelected();
});

function updateSelected() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const countSeats = selectedSeats.length;
  count.innerHTML = countSeats;
  total.innerHTML = countSeats * price;
}
