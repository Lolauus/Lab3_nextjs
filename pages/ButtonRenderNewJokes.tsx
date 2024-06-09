"use client";
import "@/styles/button.css";
export default function () {
  function onClickHandler() {
    window.location.reload();
  }
  return (
    <div className="button-div">
      <h3 className="h3-button__text">Click the button to get new jokes!</h3>
      <button className="refreshjokes-button" onClick={onClickHandler}>
        Refresh Jokes
      </button>
    </div>
  );
}
