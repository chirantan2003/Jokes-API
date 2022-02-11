import "./content.css";
import React from "react";
import face1Url from "../images/face1.png";
import face2Url from "../images/face2.png";

export default function Content() {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  const [line, setLine] = React.useState({
    joke: "",
    punchLine: "",
  });

  const url = "https://v2.jokeapi.dev/joke/Any?&type=double";

  function getJoke() {
    setIsShown(false);
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        console.log(item);
        if (item.type === "single") {
          getJoke();
        } else {
          setLine((prevLine) => ({
            ...prevLine,
            joke: item.setup,
            punchLine: item.delivery,
          }));
        }
      })
      .catch((error) => console.log(error));
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    getJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [rotate, setRotate] = React.useState(0);
  const [faceCounter, setFaceCounter] = React.useState(true);

  function clickHandlerContent() {
    toggleShown();
    if (isShown) {
      getJoke();
    }
    // isShown && getJoke();
  }

  function clickHandlerImage() {
    setRotate(1);
    toggleShown();
    if (isShown) {
      getJoke();
    }
    // isShown && getJoke();
  }

  function onAnimationHandler() {
    setRotate(0);
    if (!isShown) {
      setFaceCounter((preValue) => !preValue);
    }
  }

  return (
    <>
      <div className="container">
        <h2>Dank</h2>
        <h2 className="dull">Dad</h2>
      </div>

      <div className="content_outer">
        <div
          className="content"
          onClick={clickHandlerContent}
          // onClick={() => {
          //   toggleShown();
          //   {
          //     isShown && getJoke();
          //   }
          //}}
        >
          <p id="joke">{line.joke}</p>
          {isShown && <p>{line.punchLine}</p>}
        </div>

        <img
          src={faceCounter ? face1Url : face2Url}
          alt="face"
          className="face"
          onClick={clickHandlerImage}
          // onClick={() => {
          //   setRotate(1);
          //   toggleShown();
          //   {
          //     isShown && getJoke();
          //   }
          // }}
          // onAnimationEnd={() => {
          //   setRotate(0);
          //   {
          //     !isShown && setFaceCounter((preValue) => !preValue);
          //   }
          // }}
          onAnimationEnd={onAnimationHandler}
          rotate={rotate}
        />
      </div>

      {/* <div className="button_align">
        <button onClick={toggleShown}>Show Punchline</button>
        <button onClick={getJoke}>Get Random Joke</button>
      </div> */}
    </>
  );
}
