"use client";
export default function () {
  function onClickHandler() {
    window.location.reload();
  }
  return (
    <div>
      <button onClick={onClickHandler}>Refresh Jokes</button>
    </div>
  );
}
