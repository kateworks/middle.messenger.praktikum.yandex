import { Block } from '../../core';
import './Content.css';

interface ContentProps {}

export default class Content extends Block<ContentProps> {

  public getStaticName() { return 'Content'; };
  
  render() {
    // language=hbs
    return `
      <main class="content">
        <div data-layout=1></div>
      </main>
    `;
  }
}
