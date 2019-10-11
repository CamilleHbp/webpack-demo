import 'purecss';
import './counter.scss';

function createCounter(text = 'Hello world') {
  const element = document.createElement('div');
  element.className = 'counter';

  // Counter
  const counterButton = document.createElement('button');
  const counterContainer = document.createElement('span');
  const counterText = document.createElement('p');
  const counterIncrementBy = inc => {
    let count = 0;
    const display = () => 'Count = ' + count;

    return {
      increment: () => {
        counterText.innerHTML = display();
        count += inc;
      }
    };
  };

  const counter = counterIncrementBy(1);
  counterButton.className = 'counter-button pure-button';
  counterButton.innerHTML = '+';
  counterButton.onclick = counter.increment;
  counterText.innerHTML = "Press '+'";
  counterText.className = 'counter-text';

  counterContainer.appendChild(counterButton);
  counterContainer.appendChild(counterText);

  // Checkbox
  const checkbox = document.createElement('input');
  const checkboxContainer = document.createElement('div');

  checkbox.type = 'checkbox';
  checkbox.id = 'checkbox';
  checkbox.className = 'checkbox';
  var label = document.createElement('label');
  label.htmlFor = 'checkbox';
  label.appendChild(document.createTextNode("I'm a checkbox"));

  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(label);
  element.appendChild(counterContainer);
  element.appendChild(checkboxContainer);
  return element;
}

export default createCounter;
