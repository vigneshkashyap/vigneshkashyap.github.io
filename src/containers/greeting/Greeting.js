import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { useState, useEffect } from "react";

export default function Greeting(props) {
  const theme = props.theme;
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const texts = greeting.roles;

    let currentIndex = 0;
    let intervalId;

    const startTyping = () => {
      const currentText = texts[textIndex];
      intervalId = setInterval(() => {
        if (currentIndex < currentText.length) {
          setTypedText((prevText) => prevText + currentText[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setTypedText("");
            currentIndex = 0;
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Rotate to the next text
            startTyping();
          }, 2000); // Reset typing after 2 seconds
        }
      }, 100);
    };

    startTyping();

    return () => clearInterval(intervalId);
  }, [textIndex]);
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {/* {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )} */}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm a </span>
                {typedText}
              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
