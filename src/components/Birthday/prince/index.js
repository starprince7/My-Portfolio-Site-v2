import React from "react";
import gsap from "gsap";
import SplitTextJs from "split-text-js";
import ReactConfetti from "react-confetti";

import { useWindowSize } from "../../../hooks";

const HappyBirthDayPrince = () => {
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

          {birthdaySpeech.map((note) => (
            <p key={note}>{note}</p>
          ))}
          <span
            style={{
              opacity: showBirthdayText ? 1 : 0,
              textAlign: "center",
              fontSize: "1.2rem",
            }}
            className="fancy-text"
          >
            Happy birthday to me, let's make it a day!
          </span>
        </div>
      </div>
    </>
  );
};

const birthdaySpeech = [
  "Ladies and gents, gather 'round the cheer,",
  "It's my birthday today, let's give a big cheer!",
  "I'm another year older, a bit more wise,",
  "But don't worry, my jokes are still the prize.",
  "",
  "Thanks for being here, my fabulous crew,",
  "I'm the birthday VIP, it's true.",
  "Happy birthday to me, let's make it a day!",
];

export default HappyBirthDayPrince;
