import style from "./suggestions.module.scss";
import SuggestionsCard from "./SuggestionsCard/SuggestionsCard";
import { Button } from "@mui/material";

export default function Suggestions({
  suggestions,
  suggestionDistance,

  updateSuggestionDistanceAction,
  suggestionsDistanceState,
}) {
  const decisionHandler = () => {
    console.log(suggestionsDistanceState);
    if (suggestionsDistanceState === "closest") {
      updateSuggestionDistanceAction("farthest");
 
    } else {
      //clearSuggestionsAction();
      //updateSuggestionDistanceAction("brainmates");
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
          <Button variant="contained" onClick={() => decisionHandler()}>
            Yes
          </Button>
        </div>
        <div
          className={style.yes_no_btn_container}
          onClick={() => {
            decisionHandler("No");
          }}
        >
          <Button variant="contained">No</Button>
        </div>
      </div>
    </div>
  );
}
