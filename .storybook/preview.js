// Globally in your .storybook/preview.js.
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

addDecorator(withInfo);
