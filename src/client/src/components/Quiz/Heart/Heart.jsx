import style from "./heart.module.scss";

export default function Heart({ quote }) {
  return (
    <div className={style.container}>
      <div className={style.heart_container}>
        { <div className={style.heart} /> }

      </div>

      <div className={style.text}>
        <div className={style.quote}>{quote?.quote}</div>
        <div className={style.author}>{quote?.author}</div>
      </div>
    </div>
  );
}
