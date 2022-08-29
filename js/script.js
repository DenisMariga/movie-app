const movie = document.querySelector("#movies-choice");
const container = document.querySelector(".seats-container");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const seats = document.querySelectorAll(".row.seat:not(occupied)");
let ticketPrice = +movie.value;
container.addEventListener('click', select)
movie.addEventListener('change', price)

function price(e) {
    ticketPrice = +e.target.value;
    updateTheCounter()
}

function updateTheCounter() {
    const seatsSelected = document.querySelectorAll('.row .seat.selected')
    const SelectedCount = seatsSelected.length;
    count.innerText = SelectedCount;
    total.innerText = SelectedCount * ticketPrice
}

function select(e) {
    // seats.forEach(function(seat) {
    //     seat.className = 'seat occupied'
    // })
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
    }
    updateTheCounter()
}