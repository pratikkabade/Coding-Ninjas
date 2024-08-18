// Assuming the moviesList array is provided as below:
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];

// Function to update the movie dropdown and attach event listeners
function updateMovieDropdown() {
  const selectMovie = document.querySelector('.selectMovie select');

  moviesList.forEach((movie, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = movie.movieName;
    selectMovie.appendChild(option);
  });

  selectMovie.addEventListener('change', (event) => {
    const selectedMovie = moviesList[event.target.value];
    updateMovieInfo(selectedMovie.movieName, selectedMovie.price);
    updateTotalPrice();
  });

  // Set default movie info
  updateMovieInfo("Flash", 7);
}

// Function to update movie info
function updateMovieInfo(name, price) {
  document.getElementById('movieName').textContent = name;
  document.getElementById('moviePrice').textContent = `$ ${price}`;
}

// Function to update total price
function updateTotalPrice() {
  const selectedSeats = document.querySelectorAll('#seatCont .seat.selected').length;
  const moviePrice = parseInt(document.getElementById('moviePrice').textContent.replace('$ ', ''));
  document.getElementById('totalPrice').textContent = `$ ${selectedSeats * moviePrice}`;
}

// Function to handle seat selection
function handleSeatSelection() {
  const seats = document.querySelectorAll('#seatCont .seat:not(.occupied)');

  seats.forEach(seat => {
    seat.addEventListener('click', () => {
      seat.classList.toggle('selected');
      updateSelectedSeats();
      updateTotalPrice();
    });
  });
}

// Function to update selected seats info
function updateSelectedSeats() {
  const selectedSeats = document.querySelectorAll('#seatCont .seat.selected');
  const selectedSeatsHolder = document.getElementById('selectedSeatsHolder');
  const numberOfSeat = document.getElementById('numberOfSeat');

  selectedSeatsHolder.innerHTML = '';
  numberOfSeat.textContent = selectedSeats.length;

  if (selectedSeats.length === 0) {
    selectedSeatsHolder.innerHTML = '<span class="noSelected">No Seat Selected</span>';
  } else {
    selectedSeats.forEach(seat => {
      const span = document.createElement('span');
      span.textContent = `Seat ${Array.prototype.indexOf.call(seat.parentNode.children, seat) + 1}`;
      selectedSeatsHolder.appendChild(span);
    });
  }
}

// Function to handle continue button click
function handleContinue() {
  const continueBtn = document.getElementById('proceedBtn');

  continueBtn.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('#seatCont .seat.selected');

    if (selectedSeats.length === 0) {
      alert('Oops no seat Selected');
    } else {
      alert('Yayy! Your Seats have been booked');
      selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('occupied');
      });
      resetSelection();
    }
  });
}

// Function to handle cancel button click
function handleCancel() {
  const cancelBtn = document.getElementById('cancelBtn');

  cancelBtn.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('#seatCont .seat.selected');

    selectedSeats.forEach(seat => {
      seat.classList.remove('selected');
    });

    resetSelection();
  });
}

// Function to reset seat selection and price
function resetSelection() {
  document.getElementById('selectedSeatsHolder').innerHTML = '<span class="noSelected">No Seat Selected</span>';
  document.getElementById('numberOfSeat').textContent = 0;
  document.getElementById('totalPrice').textContent = '$ 0';
}

// Initialize the script
function init() {
  updateMovieDropdown();
  handleSeatSelection();
  handleContinue();
  handleCancel();
}

document.addEventListener('DOMContentLoaded', init);

document.addEventListener('DOMContentLoaded', function () {
  const button = document.createElement('button');
  button.textContent = '<- go back';
  button.addEventListener('click', function () {
      window.location.href = '../index.html'; // Replace with your desired URL
  });
  document.body.appendChild(button);
});