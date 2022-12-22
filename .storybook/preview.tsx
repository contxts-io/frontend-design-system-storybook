import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import GlobalStyle from '../src/styles/GlobalStyle';
import { lightTheme, darkTheme } from '../src/styles/theme';

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    darkClass: 'darkClass',
    lightClass: 'lightClass',
    stylePreview: true,
  },
  backgrounds: {
    disable: true,
  },
};

export const decorators = [withTheme];
