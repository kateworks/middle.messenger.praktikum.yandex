import Handlebars, { HelperOptions } from 'handlebars';
import Block from './Block';

interface BlockConstructable<Props = any> {
  new(props: Props): Block;
}

export default function registerComponent<Props>(Component: BlockConstructable<Props>) {
  Handlebars.registerHelper(
    Component.name,
    // eslint-disable-next-line func-names
    function (this: Props, { hash: { ref, ...hash }, data, fn }: HelperOptions) {
      // eslint-disable-next-line no-param-reassign
      if (!data.root.children) data.root.children = {};
      // eslint-disable-next-line no-param-reassign
      if (!data.root.refs) data.root.refs = {};

      const { children, refs } = data.root;

      (Object.keys(hash) as any).forEach((key: keyof Props) => {
        if (this[key]) {
          // eslint-disable-next-line no-param-reassign
          hash[key] = hash[key].replace(new RegExp(`{{${key as string}}}`, 'i'), this[key]);
        }
      });

      const component = new Component(hash);
      children[component.id] = component;
      if (ref) refs[ref] = component.getContent();
      const contents = fn ? fn(this) : '';
      return `<div data-id="${component.id}">${contents}</div>`;
    },
  );
}
