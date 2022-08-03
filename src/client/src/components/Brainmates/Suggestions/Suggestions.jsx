import style from "./suggestions.module.scss";
import SuggestionsCard from "./SuggestionsCard/SuggestionsCard";
import { Button } from "@mui/material";
import { useEffect } from "react";
import HeartLoader from "../../HeartLoader/HeartLoader";

export default function Suggestions({
  suggestions,
  suggestionDistance,
  clearSuggestionsAction,
  updateSuggestionDistanceAction,
  isLoading,
  userId,
  fetchNewSuggestionsAction,
}) {
  useEffect(() => {
    if (!Object.keys(suggestions).length) {
      fetchNewSuggestionsAction(userId);
    }
  }, [fetchNewSuggestionsAction, suggestions]);

  const DecisionHandler = (decision) => {
    console.log(`${suggestionDistance} decided: ${decision}`);
    if (suggestionDistance === "closest") {
      updateSuggestionDistanceAction("farthest");
      return 
    } else {
     
      //post likes
      //fetch new brainmates
      //play again

      updateSuggestionDistanceAction("brainmates");
    }
  };

  return isLoading ? (
    <>
      <HeartLoader /> <div>Loading suggestions</div>
    </>
  ) : (
    <div className={style.page_container}>
      {suggestionDistance === "closest" ? (
        <SuggestionsCard
          userName={suggestions?.closest?.username}
          suggestions={suggestions}
          age={suggestions?.closest?.age}
          bestResult={suggestions?.closest?.bestResultDescription}
          amountOfSamePersonalAnswers={suggestions?.closest?.amountOfSamePersonalAnswers}
          picture={suggestions?.closest?.picture}
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
        <div
          className={style.yes_no_btn_container}
          onClick={() => DecisionHandler("✔️")}
        >
          <Button variant="contained" style={{backgroundColor: "lightBlue"}}>✔️</Button>
        </div>
        <div
          className={style.yes_no_btn_container}
          onClick={() => {
            DecisionHandler("❌");
          }}
        >
          <Button variant="contained" style={{backgroundColor: "lightBlue"}}>❌</Button>
        </div>
      </div>
    </div>
  );
}

/* (isLoading ? <HeartLoader/> : */
