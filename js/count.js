function calculateTimeLeft() {
    const targetDate = new Date('2023-12-22T21:30:00');
    const now = new Date();

    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  }

  function updateCountdown() {
    const timeLeft = calculateTimeLeft();
    const countdownElement = document.getElementById('countdown');

    countdownElement.innerHTML = `
   
    <div class="column-container">
      <div class="column-item p-1">${timeLeft.days} Days</div>
 
      <div class="column-item p-1">${timeLeft.hours} Hours</div>
    
      <div class="column-item p-1">${timeLeft.minutes} Minutes</div>

      <div class="column-item p-1">${timeLeft.seconds} Seconds</div>
     
      </div>

    `;
    
  }

  // Actualizar la cuenta regresiva cada segundo
  setInterval(updateCountdown, 1000);

  // Llamar a la función inicialmente para evitar un retraso de un segundo en la visualización
  updateCountdown();