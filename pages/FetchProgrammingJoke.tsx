"use client";
import RenderProgrammingJoke from "./RenderProgrammingJoke";
import { useState, useEffect } from "react";

export default function FetchAnyJoke() {
  const [getJoke, setGetJoke] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Programming`);
    const data = await response.json();
    setGetJoke(data);
  }

  return (
    <div>
      <RenderProgrammingJoke data={getJoke} />
    </div>
  );
}
