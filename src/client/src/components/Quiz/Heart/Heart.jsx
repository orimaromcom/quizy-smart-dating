import "./heart.css";
import Quote from "../Quote/Quote";

export default function Heart({ quote }) {
  return (
    <div>
      <div className="heart"></div>
      <div >{quote.quote}</div>

      <div >{quote.author}</div>
    </div>
  );
}
