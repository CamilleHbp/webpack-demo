function createText(text = 'Hello world') {
  const element = document.createElement('div');
  const div = document.createElement('div');
  const button = document.createElement('button');
  const displayCount = document.createElement('p');
  var checkbox = document.createElement('input');

  element.style.background = '#919ed8';

  const counterInc = inc => {
    let count = 0;
    const display = () => 'Count = ' + count;

    return {
      increment: () => {
        displayCount.innerHTML = display();
        count += inc;
      }
    };
  };
  const counter = counterInc(3);

  button.innerHTML = '+';
  button.onclick = counter.increment;

  displayCount.innerHTML = "Press '+'";

  checkbox.type = 'checkbox';
  checkbox.name = 'name';
  checkbox.value = 'value';
  checkbox.id = 'id';

  var label = document.createElement('label');
  label.htmlFor = 'id';
  label.appendChild(document.createTextNode('text for label checkbox'));

  element.appendChild(displayCount);
  element.appendChild(button);
  div.appendChild(checkbox);
  div.appendChild(label);
  element.appendChild(div);
  return element;
}
export default createText;
