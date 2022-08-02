import style from "./suggestions.module.scss";
import { useState } from "react";
import SuggestionsCard from "./SuggestionsCard/SuggestionsCard";
import { Button } from "@mui/material";

export default function Suggestions({ suggestions }) {
  const [suggestionDistance, setSuggestionDistance] = useState("closest");
  const decisionHandler = (decision) => {
    console.log(decision);
    if (suggestionDistance === "closest"){
      setSuggestionDistance("farthest")

    }
    //setSuggestionsIndex(setSuggestionsIndex + 1)
  };
  return (
    <div>
      {suggestionDistance === "closest" ? (
        <SuggestionsCard
          userName={suggestions.closest.username}
          suggestions={suggestions}
          age={suggestions.closest.age}
          bestResult={suggestions.closest.bestResultDescription}
          amountOfSamePersonalAnswers={suggestions.closest.amountOfSamePersonalAnswers}
          picture={suggestions.closest.picture}
        />
      ) : null}
      {suggestionDistance === "farthest" ? (
        <SuggestionsCard
          userName={suggestions.farthest.username}
          suggestions={suggestions}
          age={suggestions.farthest.age}
          bestResult={suggestions.farthest.bestResultDescription}
          amountOfSamePersonalAnswers={suggestions.farthest.amountOfSamePersonalAnswers}
          picture={suggestions.farthest.picture}
        />
      ) : null}
      <div className={style.suggestions_container}>
        <div className={style.yes_no_btn_container}>
          <Button variant="contained" onClick={() => decisionHandler("Yes")}>
            Yes
          </Button>
        </div>
        <div className={style.yes_no_btn_container}>
          <Button variant="contained" onClick={() => decisionHandler("No")}>
            No
          </Button>
        </div>
      </div>
    </div>
  );
}
