import classNames from "classnames";
import React from "react";
import styles from "./SwitchButton.module.scss";

export default function SwitchButton({ isAudio, toggleAudioAction, className }) {
  return (
    <span className={classNames(styles["switch-button"], className)}>
      <input
        type="checkbox"
        id="switch"
      checked={isAudio}
        onChange={() => toggleAudioAction()}
      />
      <label htmlFor="switch" />
    </span>
  );
}
