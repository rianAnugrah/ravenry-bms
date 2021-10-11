import { Pane } from "evergreen-ui";
import React from "react";

const Segment = (props) => {
  return (
    <Pane
      is="section"
      ref={(ref) => console.log(ref)}
      background="white"
      border="muted"
      paddingY={24}
      paddingX={32}
      borderRadius={10}
      display="flex"
      width="100%"
      elevation={1}
      {...props}
    >
      {props.children}
    </Pane>
  );
};

export default Segment;
