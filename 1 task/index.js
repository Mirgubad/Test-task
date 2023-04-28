const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let timerId;
  return (seconds) => {
    let remainingSeconds = seconds;
    timerEl.textContent = remainingSeconds;
    timerId = setInterval(() => {
      remainingSeconds -= 1;
      if (remainingSeconds < 0) {
        clearInterval(timerId);
        return;
      }
      timerEl.textContent = remainingSeconds;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();
inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d]/g, "");
});
buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});
