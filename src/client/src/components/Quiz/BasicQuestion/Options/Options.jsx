import "./options.css";
import Option from "./Option/Option";
import { decode } from "html-entities";

export default function Options({ options, optionHandler, question }) {
  return (
    <div className="Options-container">
      {options.map((option, index) => {
        if (options)
          return (
            <Option
              text={decode(option)}
              key={index}
              question={question}
              onClick={(e) => optionHandler(decode(option),e)}
            />
          );
      })}
    </div>
  );
}
