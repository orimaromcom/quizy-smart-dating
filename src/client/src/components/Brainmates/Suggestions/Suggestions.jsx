import "./suggestions.scss";
import { useState } from "react";
import SuggestionsCard from "./SuggestionsCard/SuggestionsCard";

export default function Suggestions({ suggestions }) {
  const [suggestionDistance, setSuggestionDistance] = useState("closest");
  console.log(Object.keys(suggestions));
  return (
    <div>
      {suggestionDistance === "closest" ? (<SuggestionsCard
        userName={suggestions.closest.username}
        suggestions={suggestions}
        age={suggestions.closest.age}
        bestResult={suggestions.closest.bestResultDescription}
        amountOfSamePersonalAnswers={suggestions.closest.amountOfSamePersonalAnswers}
        picture={suggestions.closest.picture}
      />) : null }
      
       {/*  {suggestionDistance === "far" ? */} {/* <SuggestionsCard
          userName={suggestions.farthest.username}
          suggestions={suggestions}
          age={suggestions.farthest.age}
          bestResult={suggestions.farthest.bestResultDescription}
          amountOfSamePersonalAnswers={suggestions.farthest.amountOfSamePersonalAnswers}
          picture={suggestions.farthest.picture}
        /> */} {/* : null} */}
      
    
    </div>
  );
}
