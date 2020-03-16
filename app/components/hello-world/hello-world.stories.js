import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

export default { title: 'Demo' };

export const heading = () => hbs`<h1>Hello World</h1>`;

export const helloWorld = () => {
  return {
    template: hbs`<HelloWorld @onClick={{onClick}}/>`,
    context: {
      onClick: action('clicked')
    }
  }
};
