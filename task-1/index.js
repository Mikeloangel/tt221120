const timerForm = document.querySelector('.timer');
const timerInput = timerForm.querySelector('.timer__input');
const timerOutput = timerForm.querySelector('.timer__output');

let intervalId, timerCurValue;

function handleFormSubmit(e) {
  e.preventDefault();

  timerCurValue = timerInput.value;
  updateOutput(timerCurValue);
  intervalId = setInterval(handleTick, 1000);
}

function updateOutput(inputSeconds) {

  const hrs = Math.floor(inputSeconds / 60 / 60);
  inputSeconds -= hrs * 60 * 60;
  const min = Math.floor(inputSeconds / 60);
  inputSeconds -= min * 60;

  timerOutput.textContent =
    `${hrs < 10 ? `0` : ''}${hrs}:${min < 10 ? `0` : ''}${min}:${inputSeconds < 10 ? `0` : ''}${inputSeconds}`;
}

function handleTick() {
  if (timerCurValue === 0) {
    clearInterval(intervalId);
    timerOutput.textContent = '⏳';
    return;
  }
  updateOutput(--timerCurValue);
}

timerForm.addEventListener('submit', handleFormSubmit);