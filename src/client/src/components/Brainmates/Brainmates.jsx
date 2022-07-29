import "./brainmates.css";
import { useEffect } from "react";
import MateCard from "./MateCard/MateCard";

export default function Brainmates({ brainmates, fetcBrainmates }) {
  //temp: we should load globaly
  useEffect(() => {
    if (!brainmates.length) fetcBrainmates(2);
  }, []);

  return (
    <div className="brain-mates-container">
      <MateCard status={"match"} userName={"brainmate.userName"} />
      {/* {Object.keys(brainmates.likeBack).map((brainmate, i) => {
        return (
          <MateCard
            key={`match` + i}
            status={"match"}
            userName={"brainmate.userName"}
          />
        );
      })}
      {Object.keys(brainmates.pending).map((brainmate, i) => {
        return (
          <MateCard key={`pending` + i} status={"pending"} userName={""} />
        );
      })} */}
    </div>
  );
}
