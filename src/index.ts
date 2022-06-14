import { renderDOM, registerComponent } from './core';
import { Button } from './components';

registerComponent(Button);

document.addEventListener('DOMContentLoaded', () => {
  // const App = new LoginPage();
  // const App = new OnboardingPage({
  //   links: [
  //     {to: '#signup', text: 'signup'},
  //     {to: '#login', text: 'login'},
  //   ]
  // });

  // renderDOM(App);

  const props = {
    title: "Button",
    onClick: (event: Event) => { 
      event.preventDefault();
      console.log('Clicked'); 
    }
  };

  const button = new Button(props);
  renderDOM(button);
});

