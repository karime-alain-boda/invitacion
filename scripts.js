// Esperar a que todo el HTML esté cargado en el navegador
window.addEventListener('DOMContentLoaded', () => {
    console.log("Iniciando temporizador de boda...");
  
    // Fecha del evento: Año (2026), Mes (9 = Octubre porque en JS Enero es 0 y Octubre es 9), Día (24), Hora (18), Min (0)
    const targetDate = new Date(2026, 9, 24, 18, 0, 0).getTime();
  
    function updateCountdown() {
      const now = new Date().getTime();
      const difference = targetDate - now;
  
      const daysEl = document.getElementById('days');
      const hoursEl = document.getElementById('hours');
      const minutesEl = document.getElementById('minutes');
      const secondsEl = document.getElementById('seconds');
  
      if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        console.error("No se encontraron los IDs 'days', 'hours', 'minutes' o 'seconds' en el HTML.");
        return;
      }
  
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        daysEl.textContent = days < 10 ? '0' + days : String(days);
        hoursEl.textContent = hours < 10 ? '0' + hours : String(hours);
        minutesEl.textContent = minutes < 10 ? '0' + minutes : String(minutes);
        secondsEl.textContent = seconds < 10 ? '0' + seconds : String(seconds);
      } else {
        const countdownContainer = document.getElementById('countdown');
        if (countdownContainer) {
          countdownContainer.innerHTML = "<p style='font-family: var(--font-serif); font-weight: bold;'>¡HOY ES EL GRAN DÍA!</p>";
        }
      }
    }
  
    // Ejecutar inmediatamente al cargar y luego cada 1000ms (1 segundo)
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });