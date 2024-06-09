import "@/styles/main.css";
import FetchAnyJoke from "./FetchAnyJoke";
import FetchProgrammingJoke from "./FetchProgrammingJoke";
import FetchSFWJoke from "./FetchSFWJoke";
import Footer from "./Footer";
import ButtonRenderNewJokes from "./ButtonRenderNewJokes";

export default function Main() {
  return (
    <div className="wrapper" aria-label="component-render">
      <FetchSFWJoke />
      <FetchAnyJoke />
      <FetchProgrammingJoke />
      <ButtonRenderNewJokes />
      <Footer />
    </div>
  );
}
