import "./quote.css";

export default function Quote({ quote }) {
  return (
    <div>
      <div className="quote"> {quote.quote}</div>
    </div>
  );
}
