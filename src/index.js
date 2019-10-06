import counter from './components/counter';
import title from './components/title';

let demoTitle = title("Hi! I'm demo.");
let demoCounter = counter();

document.body.appendChild(demoTitle);
document.body.appendChild(demoCounter);

// Hot Module Reloading interface (HMR)
if (module.hot) {
  module.hot.accept('./components/title', () => {
    const nextTitle = title();

    // Replace old content with the hot loaded one
    document.body.replaceChild(nextTitle, demoTitle);

    demoTitle = nextTitle;
  });
  module.hot.accept('./components/counter', () => {
    const nextCounter = counter();

    // Replace old content with the hot loaded one
    document.body.replaceChild(nextCounter, demoCounter);

    demoCounter = nextCounter;
  });
}
