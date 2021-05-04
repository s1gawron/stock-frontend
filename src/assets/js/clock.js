function clock() {
  const today = new Date();

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[today.getDay()];
  let day = today.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = months[today.getMonth()];
  const year = today.getFullYear();

  let hour = today.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let seconds = today.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  document.getElementById('time').innerHTML = `Today is: ${dayName}, ${day} ${monthName} ${year} ${hour}:${minutes}:${seconds}`;

  setTimeout(() => clock(), 1000);
}

export default clock;
