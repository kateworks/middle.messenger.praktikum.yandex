import { renderDOM, registerComponent } from './core';
import { Button, Content } from './components';
import IndexPage from './pages/IndexPage/IndexPage';

registerComponent(Button);
registerComponent(Content);

document.addEventListener('DOMContentLoaded', () => {
  const App = new IndexPage();

  // const App = new OnboardingPage({
  //   links: [
  //     {to: '#signup', text: 'signup'},
  //     {to: '#login', text: 'login'},
  //   ]
  // });

  // renderDOM(App);

  // const props = {
  //   title: "Button",
  //   onClick: (event: Event) => { 
  //     event.preventDefault();
  //     console.log('Clicked'); 
  //   }
  // };

  //const button = new Button(props);
  renderDOM(App);
});

