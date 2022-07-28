import "./options.css";
import Option from "./Option/Option";

export default function Options({ options,  optionHandler,  question}) {
  
  return (
    <div className="Options-container">
      {options.map((option, index) => {
        if (options)
          return (
            <Option
              text={option}
              key={index}
              question={question}
              onClick={() => optionHandler(option)}
            />
          );
      })}
    </div>
  ); 
}
