import "./brainmates.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MateCard from "./MateCard/MateCard";
import SuggestionsConnector from "./Suggestions/suggestions-connector";

export default function Brainmates({
  brainmates,
  fetchBrainmatesAction,
  userId,
  suggestionsOrBrainmates,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/profile");
      return;
    }
  }, [navigate, userId]);

  useEffect(() => {
    async function updateBrainmates(userId) {
      await fetchBrainmatesAction(userId);
    }
    if (userId) updateBrainmates(userId);
  }, []);

  return suggestionsOrBrainmates === "brainmates" ? (
    <div className="brain-mates-container">
      {brainmates.likeBack
        ? Object.keys(brainmates.likeBack).map((brainmate, i) => {
            const current = brainmates.likeBack[brainmate];
            return (
              <MateCard
                key={`match ${i}`}
                status={"match"}
                userName={current.username}
                imgSrc={current.picture}
                achievements={current.bestResultDescription}
                phoneNumber={current.phoneNumber}
                age={current.age}
                location={current.location}
                gender={current.gender}

              />
            );
          })
        : null}
      {brainmates.pending
        ? Object.keys(brainmates.pending).map((brainmate, i) => {
            const current = brainmates.pending[brainmate];
            return (
              <MateCard
                key={`pending` + i}
                status={"pending"}
                userName={current.username}
                achievements={current.bestResultDescription}
                gender={current.gender}

              />
            );
          })
        : null}
      {brainmates.likeBack &&
        brainmates.likeBack.length === 0 &&
        brainmates.pending &&
        brainmates.pending.length === 0 && (
          <p>You do not have any brainmates yet. Play the quiz first!</p>
        )}
      {brainmates.pending && (
        <p>You see more info about your brainmates when they like you back</p>
      )}
    </div>
  ) : (
    <SuggestionsConnector />
  );
}
