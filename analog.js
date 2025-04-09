// Function to update the clock hands
function updateClock() {
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
  
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Calculate the degree for each hand
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 30 degrees per hour
    const minuteDeg = minutes * 6 + (seconds / 60) * 6; // 6 degrees per minute
    const secondDeg = seconds * 6; // 6 degrees per second
  
    // Rotate each hand to the calculated angle and position them at the center
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Initialize the clock on load
window.onload = () => {
    // Set the clock hands to the center initially
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');

    hourHand.style.transformOrigin = 'center';
    minuteHand.style.transformOrigin = 'center';
    secondHand.style.transformOrigin = 'center';
    
    // Start the clock update
    updateClock();
    
    // Update the clock every second
    setInterval(updateClock, 1000);
};
