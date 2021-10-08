import { defaultTheme, ThemeProvider, Button } from "evergreen-ui";

import React from "react";

export default function CustomButton(props) {
  const theme = {
    ...defaultTheme,
    components: {
      ...defaultTheme.components,
      Button: {
        ...defaultTheme.components.Button,
        appearances: {
          superdanger: {
            color: "white",
            paddingX: 12,
            paddingY: 8,
            borderRadius: 5,
            backgroundColor: "#0050C5",
            _hover: {
              backgroundColor: "#005FE7",
            },
            _active: {
              backgroundColor: "#0050C5",
            },
            _focus: {
              // boxShadow: "0 0 0 2px lightcoral",
            },
          },
        },
      },
    },
  };
  return (
    <ThemeProvider value={theme}>
      <Button appearance="superdanger" {...props}>
        {props.children}
      </Button>
    </ThemeProvider>
  );
}
