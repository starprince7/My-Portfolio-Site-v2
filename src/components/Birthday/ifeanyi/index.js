import React from "react";
import gsap from "gsap";
import SplitTextJs from "split-text-js";
import ReactConfetti from "react-confetti";

import { useWindowSize } from "../../../hooks";

const BirthDayIfeanyi = () => {
  const { width, height } = useWindowSize();
  const [beginConfetti, setBeginConfetti] = React.useState(false);
  const [showBirthdayText, setShowBirthdayText] = React.useState(false);

  React.useEffect(() => {
    runBirthdayAnimation();
  }, []);

  function runBirthdayAnimation() {
    const titles = gsap.utils.toArray("p");
    const timeLine = gsap.timeline({
      onComplete: () => {
        setBeginConfetti(true);
        setShowBirthdayText(true);
      },
    });

    titles.forEach((title) => {
      const splittedTitle = new SplitTextJs(title);

      timeLine.from(
        splittedTitle.chars,
        {
          opacity: 0,
          y: 10,
          rotateX: -90,
          stagger: 0.02,
          delay: 0.2,
        },
        "<"
      );
      timeLine.to(
        splittedTitle.chars,
        {
          opacity: 0,
          y: -10,
          rotateX: 90,
          stagger: 0.02,
          delay: 1,
        },
        "<1"
      );
    });
  }

  return (
    <>
      <div>
        {beginConfetti && <ReactConfetti width={width} height={height} />}
      </div>
      <div
        id="Birthday"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="text-wrapper">
          <div
            style={{ textAlign: "center", color: "#424242", fontSize: "12px" }}
          >
            ⚠️Attention!
          </div>
          <br />

          {birthDayNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
          <span
            style={{ opacity: showBirthdayText ? 1 : 0, textAlign: "center" }}
            className="fancy-text"
          >
            Happy Birthday!
          </span>
        </div>
      </div>
    </>
  );
};

const birthDayNotes = [
  "To my big bro, wise and true,",
  "You've been a life compass",
  "On this day, your wisdom shines ✨",
  "This day, your birth we cheer!",
  "I celebrate the life you've led.",
  "Big bro!",
  //   "Happy Birthday!",
];

export default BirthDayIfeanyi;
