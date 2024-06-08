import FetchAnyJoke from "./FetchAnyJoke";
import FetchProgrammingJoke from "./FetchProgrammingJoke";
import FetchSFWJoke from "./FetchSFWJoke";
import Footer from "./Footer";
import RenderNewJokes from "./RenderNewJokesButton";

export default function Main() {
  return (
    <div aria-label="component-render">
      <RenderNewJokes />
      <br />
      <FetchSFWJoke />
      <br />
      <FetchAnyJoke />
      <br />
      <FetchProgrammingJoke />
      <br />
      <Footer />
    </div>
  );
}
