import style from "./suggestions.module.scss";
import { useState } from "react";
import SuggestionsCard from "./SuggestionsCard/SuggestionsCard";
import { Button } from "@mui/material";
import {clearSuggestionsAction} from "../../../redux/actions/clear-suggestions-action"


export default function Suggestions({ suggestions,suggestionDistance,setSuggestionDistance}) {
console.log(suggestions)
  const decisionHandler = (decision) => {
    console.log(decision);

    if (suggestionDistance === "closest") {
      setSuggestionDistance("farthest");
    } else {
      console.log("here")
      clearSuggestionsAction()
  
      setSuggestionDistance("brainmates")

    }
  };
  return (
    <div className={style.page_container}>
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
      <div className={style.buttons_container}>
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
