import './title.scss';

function createTitle() {
  const element = document.createElement('div');
  element.className = 'title';
  element.innerHTML = "I'm so hot when I'm reloading.";

  return element;
}
export default createTitle;
