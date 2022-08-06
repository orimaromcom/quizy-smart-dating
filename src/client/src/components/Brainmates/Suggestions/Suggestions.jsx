import { useState } from "react";
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
  userPicture,
  postUserLikeAction,
  fetchBrainmatesAction,
}) {
  const audio = new Audio(loveMomentSound);
  audio.loop = true;

  const [isMatch, setIsMatch] = useState(false);

  const decisionHandler = async (decision, suggestedUser) => {
    const currentUserLikesSuggestedUser = decision === "✔️";
    await postUserLikeAction(
      userId,
      suggestedUser.userId,
      currentUserLikesSuggestedUser
    );

    if (currentUserLikesSuggestedUser && suggestedUser.likeBack) {
      // audio.play();
      // audio.pause();
      confetti();
      setIsMatch(true);
      setTimeout(async () => {
        setIsMatch(false);
        await nextStep();
      }, 3000);
      console.log("We have a match!");
    } else {
      await nextStep();
    }
  }

  const nextStep = async () => {

    if (suggestionsOrBrainmates === "closest") {
      updateSuggestionsOrBrainmatesAction("farthest");
    } else {
      updateSuggestionsOrBrainmatesAction("brainmates");
      await fetchBrainmatesAction(userId);
    }
  };

  const goBackToBrainmatesWithDelay = (timeout) => {
    setTimeout(() => {
      updateSuggestionsOrBrainmatesAction("brainmates");
    }, timeout);
    return null;
  };

  return isLoading ? (
    <>
      <HeartLoader /> <div>Loading suggestions</div>
    </>
  ) : suggestions[suggestionsOrBrainmates] ? (
    <div className={style.page_container}>
      { isMatch &&
        <div className="suggestion-card-avatar-container">
          <img className="suggestion-card-avatar-img" src={suggestions[suggestionsOrBrainmates].picture} alt="mate" />
          <img className="suggestion-card-avatar-img" src={userPicture} alt="you" />
        </div>
      }
      <SuggestionsCard
        userName={suggestions[suggestionsOrBrainmates].username}
        age={suggestions[suggestionsOrBrainmates].age}
        bestResult={suggestions[suggestionsOrBrainmates].bestResultDescription}
        amountOfSamePersonalAnswers={
          suggestions[suggestionsOrBrainmates].amountOfSamePersonalAnswers
        }
        gender={suggestions[suggestionsOrBrainmates].gender}

      />
      <div className={style.buttons_container}>
        <div
          className={style.yes_no_btn_container}
          onClick={() =>
            decisionHandler("✔️", suggestions[suggestionsOrBrainmates])
          }
        >
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
  ) : (
    <p>
      Sorry, there are no suggestions for you...
      {goBackToBrainmatesWithDelay(3000)}
    </p>
  );
}
