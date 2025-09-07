"use client";

import Image from "next/image";

const ConversationAI = ({ hideControls = false }) => {
  return (
    <section
      className="work-carousel section-padding pt-0 metro position-re"
      style={{ paddingTop: "50px" }}
    >
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1
          className="text-center animate__fadeInDown animate__animated"
          style={{ color: "white" }}
        >
          I Build Conversational AI
        </h1>
        <div className="container ontop">
          <Image
            src="/gif/audio-wave.gif"
            alt="audio wave"
            width={400}
            height={720}
          />
          <p
            className="text-center animate__fadeInDown animate__animated"
            style={{ color: "white" }}
          >
            Hello There!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConversationAI;
