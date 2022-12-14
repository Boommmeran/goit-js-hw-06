function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector('#controls');

const inputRef = controlsRef.querySelector('input');

const btnsRef = controlsRef.querySelectorAll('button');

const boxesRef = document.querySelector('#boxes');

btnsRef[0].addEventListener('click', onBtnCreateClick);

btnsRef[1].addEventListener('click', onBtnDestroyClick);

function onBtnCreateClick(event) {
  const boxesAmound = inputRef.value;

  createBoxes(boxesAmound);
}

function onBtnDestroyClick() {
  boxesRef.innerHTML = '';
}

function createBoxes(amount) {
  let boxSize = 30;
  let string = `<div style="width:${boxSize}px; height:${boxSize}px; background-color:${getRandomHexColor()}"></div>`;
  let boxesMarkup = '';

  for (let i = 0; i < amount; i += 1) {
    boxesMarkup += string;
    string = `<div style="width:${boxSize += 10}px; height:${boxSize}px; background-color:${getRandomHexColor()}"></div>`;
  }

  boxesRef.insertAdjacentHTML('afterbegin', boxesMarkup);
}
