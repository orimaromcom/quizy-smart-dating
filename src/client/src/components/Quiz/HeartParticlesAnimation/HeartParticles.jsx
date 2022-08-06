import FavoriteIcon from "@mui/icons-material/Favorite";
import particle from "./heart-particles.scss";
import React, { useState } from "react";

export function pop(e) {
  let amount = 30;
  switch ("shadow") {
    case "shadow":
    case "line":
      amount = 60;
      break;
  }
  // Quick check if user clicked the button using a keyboard
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = e.target.getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // We pass the coordinates of the button for x & y values
      createParticle(x, y, e.target.dataset.type);
    }
  } else {
    for (let i = 0; i < amount; i++) {
      createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
    }
  }
}
function createParticle(x, y, type) {
  const particle = document.createElement("particle");
  document.body.appendChild(particle);
  let width = Math.floor(Math.random() * 30 + 8);
  let height = width;
  let destinationX = (Math.random() - 0.5) * 300;
  let destinationY = (Math.random() - 0.5) * 300;
  let rotation = Math.random() * 520;
  let delay = Math.random() * 200;

  particle.innerHTML = ["❤️", "💖", "💛", "💚", "💙", "💜", "💘", "❤️"][
    Math.floor(Math.random() * 7)
  ];
  particle.style.fontSize = `${Math.random() * 24 + 10}px`;
  width = height = "auto";

  particle.style.width = `${width}px`;
  particle.style.height = `${height}px`;
  const animation = particle.animate(
    [
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1,
      },
      {
        transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${
          y + destinationY
        }px) rotate(${rotation}deg)`,
        opacity: 0,
      },
    ],
    {
      duration: Math.random() * 1000 + 5000,
      easing: "cubic-bezier(0, .9, .57, 1)",
      delay: delay,
    }
  );
  animation.onfinish = removeParticle;
}
function removeParticle(e) {
  e.srcElement.effect.target.remove();
}

export default function HeartParticles({ isBroken, toggleIsBrokenAction }) {
  return (
    <div
      onClick={(e) => {
        //pop(e);
        toggleIsBrokenAction();

        setTimeout(function () {
          toggleIsBrokenAction();
        }, 1500);
      }}
    >
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium heart-icon css-u42cxr-MuiSvgIcon-root"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          className="heart"
          d="M32 56.9333L28.1333 53.4133C14.4 40.96 5.33333 32.7467 5.33333 22.6667C5.33333 14.4533 11.7867 8 20 8C24.64 8 29.0933 10.16 32 13.5733C34.9067 10.16 39.36 8 44 8C52.2133 8 58.6667 14.4533 58.6667 22.6667C58.6667 32.7467 49.6 40.96 35.8667 53.44L32 56.9333Z"
        />
        <path
          className={isBroken ? "stroke" : ""}
          d="M31.9167 13L29 20.1628L34 24.7674L29.8333 31.9302L34 36.0233L29.8333 43.6977L34 47.7907L31.9167 57"
        />
      </svg>
    </div>
  );
}
