import { Block } from '../../core';
import './Button.css';

interface ButtonProps {
  title: string;
  link?: string;
  className?: string;
  onClick?: (event: Event) => void;
}

export default class Button extends Block {
  constructor({
    title, link = 'https://example.com/', className = '', onClick = () => {},
  }: ButtonProps) {
    super({
      title, link, className, events: { click: onClick },
    });
  }

  public getStaticName() { return 'Button'; };

  protected render(): string {
    // language=hbs
    return `
    <a class="button {{className}}" href="{{link}}">
      {{title}}
    </a>    
   `;
  }
}
