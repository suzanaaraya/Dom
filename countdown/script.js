$(document).ready(function () {
    // Initialize counter value
    let counter = 10; // Set the initial countdown value
    let countdownInterval; // Variable to store the countdown interval
  
    // Function to update the counter display
    function updateCounter() {
      $("#counter").text(counter);
  
      // Change color based on value
      if (counter > 0) {
        $("#counter").css("color", "green");
      } else if (counter === 0) {
        $("#counter").css("color", "red");
        clearInterval(countdownInterval); // Stop the countdown when it reaches 0
      }
    }
  
    // Countdown logic
    function startCountdown() {
      if (countdownInterval) clearInterval(countdownInterval); // Clear any existing interval
      countdownInterval = setInterval(() => {
        if (counter > 0) {
          counter--;
          updateCounter();
        } else {
          clearInterval(countdownInterval); // Stop when counter reaches 0
        }
      }, 1000); // Decrease every 1 second
    }
  
    // Event listeners
    $("#startCountdown").click(function () {
      startCountdown();
    });
  
    $("#reset").click(function () {
      counter = 10; // Reset the counter to the initial value
      clearInterval(countdownInterval); // Stop any running countdown
      updateCounter();
    });
  
    // Initial update for display
    updateCounter();
  });
  