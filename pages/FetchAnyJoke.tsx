"use client";
import RenderAnyJoke from "./RenderAnyJoke";
import { useState, useEffect } from "react";

export default function FetchAnyJoke() {
  const [getJoke, setGetJoke] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Any`);
    const data = await response.json();
    setGetJoke(data);
  }

  return (
    <div aria-label="return-div">
      <RenderAnyJoke data={getJoke} />
    </div>
  );
}
