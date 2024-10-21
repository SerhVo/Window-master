const timer = (id, deadline) => {
  const getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };
  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.textContent = t.days;
      hours.textContent = t.hours < 10 ? "0" + t.hours : t.hours;
      minutes.textContent = t.minutes < 10 ? "0" + t.minutes : t.minutes;
      seconds.textContent = t.seconds < 10 ? "0" + t.seconds : t.seconds;

      if (t.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timeInterval);
      }
    }
  };
  setClock(id, deadline);
};
export default timer;
