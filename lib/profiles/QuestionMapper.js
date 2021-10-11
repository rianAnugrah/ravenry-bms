import { Pane, TextareaField, TextInputField } from "evergreen-ui";
import React from "react";
import { Segment } from "..";

export default function QuestionMapper({ question }) {
  return <Pane>{quest(question)}</Pane>;
}

const quest = (question) => {
  switch (question.type) {
    case "date":
      return (
        <TextInputField
          width="100%"
          label={question.label}
          required={question.required}
          description={question.subtitle}
          placeholder={question.placeholder}
          type={"date"}
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
        />
      );
    case "richtext":
      return (
        <TextareaField
          width="100%"
          label={question.label}
          required={question.required}
          description={question.subtitle}
          placeholder={question.placeholder}
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
        />
      );
    default:
      return (
        <TextInputField
          width="100%"
          label={question.label}
          required={question.required}
          description={question.subtitle}
          placeholder={question.placeholder}
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
        />
      );
  }
};
