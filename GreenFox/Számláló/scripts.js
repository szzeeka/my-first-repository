const totalCount = document.getElementById("total-count");

let count = 0;

totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
  };

  // Function to decrement count
const handleDecrement = () => {
    count--;
    totalCount.innerHTML = count;
  };

  // Select increment and decrement buttons
const incrementCount = document.getElementById("increase");
const decrementCount = document.getElementById("decrease");

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);