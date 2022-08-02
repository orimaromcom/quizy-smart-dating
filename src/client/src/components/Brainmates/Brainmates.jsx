import "./brainmates.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MateCard from "./MateCard/MateCard";
import SuggestionsConnector from "./Suggestions/Suggestions";

export default function Brainmates({
  brainmates,
  fetchBrainmatesAction,
  userId,
  suggestionsDistanceState,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/profile");
      return;
    }
  }, [navigate, userId]);

  //temp: we should load globaly
  useEffect(() => {
    if (userId && !Object.keys(brainmates).length) fetchBrainmatesAction(userId);
  }, []);

  return (
    brainmates &&
    (suggestionsDistanceState === "brainmates" ? (
      <div className="brain-mates-container">
        {brainmates.likeBack
          ? Object.keys(brainmates.likeBack).map((brainmate, i) => {
              const current = brainmates.likeBack[brainmate];
              return (
                <MateCard
                  key={`match` + i}
                  status={"match"}
                  userName={current.username}
                  imgSrc={current.picture}
                  achievements={current.bestResultDescription}
                  phoneNumber={current.phoneNumber}
                  age={current.age}
                  location={current.location}
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
      <SuggestionsConnector suggestionsDistanceState={suggestionsDistanceState}/>
    ))
  );
}
