const spanValueRef = document.querySelector('#value');

let counterValue = 0;

const actions = document.querySelectorAll('#counter button');

actions[0].addEventListener('click', function() {
  counterValue -= 1;
  spanValueRef.textContent = counterValue;
});

actions[1].addEventListener('click', function() {
  counterValue += 1;
  spanValueRef.textContent = counterValue;
});
