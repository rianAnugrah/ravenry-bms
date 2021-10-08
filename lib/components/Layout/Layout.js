import { Pane } from "evergreen-ui";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Pane
      ref={(ref) => console.log(ref)}
      margin={0}
      paddingX={24}
      paddingY={0}
      width="100%"
      display="flex"
      justifyContent="center"
      background="tint2"
      flexDirection="column"
      alignItems="center"
    >
      <Pane maxWidth="1024px">{children}</Pane>
    </Pane>
  );
};

export default Layout;
