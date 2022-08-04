import Page from "../Page/Page";
import heart_loader_style from "./heart-loader.module.scss";

export default function HeartLoader({ quote, loadingMessage }) {
  return (
    <Page>
      <div className={heart_loader_style.container}>
        <div className={heart_loader_style.heart_container}>
          <div className={heart_loader_style.icon}>
            <svg
              className={heart_loader_style["heart-main"]}
              viewBox="0 0 512 512"
              width="100"
              title="heart"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
            <svg
              className={heart_loader_style["heart-background"]}
              viewBox="0 0 512 512"
              width="100"
              title="heart"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
          </div>
        </div>
        <div className={heart_loader_style.text}>{loadingMessage}</div>
        <div className={heart_loader_style.text}>
          <div className={heart_loader_style.quote}>{quote?.quote}</div>
          <div className={heart_loader_style.author}>{quote?.author}</div>
        </div>
      </div>
    </Page>
  );
}
