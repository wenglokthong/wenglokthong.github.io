import React, { useEffect, useState, useRef } from "react";

import "./randomPicker.css";

export const RandomPicker = () => {
  const [tagsElements, setTagsElements] = useState([]);
  const [tagsHighlightStates, setHighlightStates] = useState([false]);
  const textarea = useRef(null);

  useEffect(() => {
    textarea.current.focus();
  }, []);

  const handleTextAreaChange = (e) => {
    createTags(e.target.value);
  };

  const handleOnEnter = (e) => {
    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.value = "";
      }, 10); //clear text box after enter (have a bit of delay so it wouldnt miss clearing the initial enter newline)

      randomSelect();
    }
  };

  function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();

      if (randomTag !== undefined) {
        let states = tagsHighlightStates;
        states[randomTag] = true;
        setHighlightStates(states);

        setTimeout(() => {
          let states = tagsHighlightStates;
          states[randomTag] = false;
          setHighlightStates(randomTag);
        }, 100);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = pickRandomTag();

        let states = tagsHighlightStates;
        states[randomTag] = true;
        setHighlightStates(states);
      }, 100);
    }, times * 100);
  }

  function pickRandomTag() {
    return Math.floor(Math.random() * tagsElements.length);
  }

  const createTags = (input) => {
    const tags = input
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    setTagsElements(tags);
  };

  return (
    <div className="randompicker-body">
      <div className="container randompicker-text">
        Enter your choices here diveded by a comma. Press ENTER when you are
        done
      </div>
      <textarea
        className="randompicker-textbox"
        placeholder="Enter choices here..."
        id="textarea"
        ref={textarea}
        onChange={handleTextAreaChange}
        onKeyDown={handleOnEnter}
      ></textarea>

      <div id="tags">
        {tagsElements.map((element, index) => {
          return (
            <span
              className={tagsHighlightStates[index] ? "tag highlight" : "tag"}
              key={index}
            >
              {element}
            </span>
          );
        })}
      </div>
    </div>
  );
};
