import "./options.css";
import Option from "./Option/Option";

export default function Options({ options, setChosenOption }) {
  
  return (
    <div className="Options-container">
      {options.map((option, index) => {
        if (options)
          return (
            <Option
              text={option}
              key={index}
              onClick={() => setChosenOption({ chosenOption: option })}
            />
          );
      })}
    </div>
  ); 
}
