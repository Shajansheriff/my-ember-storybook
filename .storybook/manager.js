import { create } from '@storybook/theming/create';

let mytheme =  create({
  base: 'dark',

  brandTitle: 'My Ember storybook',
  brandUrl: '#',
  brandImage: 'https://emberjs.com/images/brand/ember_Ember-Light.png',
});

import { addons } from '@storybook/addons';

addons.setConfig({
  theme: mytheme,
});
