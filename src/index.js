import counter from './counter';
import component from './component';

let demoComponent = component("Hi! I'm demo.");
let demoCounter = counter();

document.body.appendChild(demoComponent);
document.body.appendChild(demoCounter);

// Hot Module Reloading interface (HMR)
if (module.hot) {
  module.hot.accept('./component', () => {
    const nextComponent = component();

    // Replace old content with the hot loaded one
    document.body.replaceChild(nextComponent, demoComponent);

    demoComponent = nextComponent;
  });
  module.hot.accept('./counter', () => {
    const nextCounter = counter();

    // Replace old content with the hot loaded one
    document.body.replaceChild(nextCounter, demoCounter);

    demoCounter = nextCounter;
  });
}
