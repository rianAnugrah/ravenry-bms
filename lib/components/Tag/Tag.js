import { Pane, Strong } from "evergreen-ui";
import React from "react";

export default function Tag(props) {
  return (
    <Pane
      {...props}
      display="flex"
      border="1px solid #D6D6D7"
      paddingX={24}
      borderRadius={16}
      height={32}
      marginY={8}
      marginRight={8}
    >
      <Strong size={400} lineHeight="32px">{props.children}</Strong>
    </Pane>
  );
}
