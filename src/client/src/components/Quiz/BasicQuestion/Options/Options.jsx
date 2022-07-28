import "./options.css";
import Option from "./Option/Option";

export default function Options({ options,  optionHandler}) {
  
  return (
    <div className="Options-container">
      {options.map((option, index) => {
        if (options)
          return (
            <Option
              text={option}
              key={index}
              onClick={() => optionHandler(option)/* setChosenOption({ chosenOption: option } */}
            />
          );
      })}
    </div>
  ); 
}
