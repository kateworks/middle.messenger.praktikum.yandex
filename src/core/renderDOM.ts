import Block from './Block';

export default function renderDOM(block: Block) {
  const root = document.querySelector('#app');

  if (!root) {
    console.log('Root element is missing');
    return;
  }

  root.innerHTML = '';
  const element = block.getContent();
  root.append(element);
}
