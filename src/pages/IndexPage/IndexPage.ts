import { Block } from '../../core';
import '../../styles/wrapper.css';
import '../../partials/cover/cover.css';
import image from './owl.svg';

export default class IndexPage extends Block {
  render() {
    // language=hbs
    return `
      {{#Content}}
        <section class="wrapper cover">
          <img class="cover__image" src="${image}" alt="Owl image">
          <h1 class="cover__title">Owl Messenger</h1>
        </section>
      {{/Content}}
    `;
  }
}

// {{> login/login aref="../pages/signin.hbs"}}
