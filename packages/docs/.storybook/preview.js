import React from "react";
import { themes } from "@storybook/theming";
import { darkTheme, theme } from '@course-ignite-ui/react/src/styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};

const withTheme = (Story, context) => {
  const themeStyles = context?.globals?.backgrounds?.value === '#F8F8F8' ? theme : darkTheme

  return (
    React.createElement('div', { className: themeStyles.className },
      React.createElement(Story, context)
    )
  );
};

export const decorators = [withTheme];