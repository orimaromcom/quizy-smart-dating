import { useEffect, useCallback } from "react";
import { Button } from "@mui/material";
import confetti from "canvas-confetti";
import SuggestionsCard from "./SuggestionsCard/SuggestionsCard";
import HeartLoader from "../../HeartLoader/HeartLoader";
import loveMomentSound from "../../../assets/sounds/loveMomentSound.mp3";
import style from "./suggestions.module.scss";


export default function Suggestions({
  suggestions,
  suggestionsOrBrainmates,
  updateSuggestionsOrBrainmatesAction,
  isLoading,
  userId,
  postUserLikeAction,
  fetchBrainmatesAction,
}) {
  const audio = new Audio(loveMomentSound);
  audio.loop = true;

  const decisionHandler = async (decision, suggestedUser) => {
    console.log('suggestedUser:', suggestedUser);
    const currentUserLikesSuggestedUser = decision === "✔️";
    if (currentUserLikesSuggestedUser && suggestedUser.likeBack) {
      // audio.play();
      // audio.pause();
      confetti();
      console.log("We have a match!!!!!!!!");
    }
    postUserLikeAction(
      userId,
      suggestedUser.userId,
      currentUserLikesSuggestedUser
    );
    if (suggestionsOrBrainmates === "closest") {
      updateSuggestionsOrBrainmatesAction("farthest");
    } else {
      updateSuggestionsOrBrainmatesAction("brainmates");
      await fetchBrainmatesAction(userId);
    }
  }

  return isLoading ? (
    <>
      <HeartLoader /> <div>Loading suggestions</div>
    </>
  ) : (
    <div className={style.page_container}>
      <SuggestionsCard
        userName={suggestions[suggestionsOrBrainmates].username}
        age={suggestions[suggestionsOrBrainmates].age}
        bestResult={suggestions[suggestionsOrBrainmates].bestResultDescription}
        amountOfSamePersonalAnswers={suggestions[suggestionsOrBrainmates].amountOfSamePersonalAnswers}
        picture={suggestions[suggestionsOrBrainmates].picture}
      />
      <div className={style.buttons_container}>
        <div
          className={style.yes_no_btn_container}
          onClick={() => decisionHandler("✔️", suggestions[suggestionsOrBrainmates])}>
          <Button variant="contained" style={{ backgroundColor: "lightBlue" }}>
            ✔️
          </Button>
        </div>
        <div
          className={style.yes_no_btn_container}
          onClick={() => {
            decisionHandler("❌", suggestions[suggestionsOrBrainmates]);
          }}
        >
          <Button variant="contained" style={{ backgroundColor: "lightBlue" }}>
            ❌
          </Button>
        </div>
      </div>
    </div>
  );
}
