import FetchAnyJoke from "./FetchAnyJoke";
import FetchProgrammingJoke from "./FetchProgrammingJoke";
import FetchSFWJoke from "./FetchSFWJoke";

export default function Main() {
  return (
    <div aria-label="component-render">
      <FetchSFWJoke />
      <br />
      <FetchAnyJoke />
      <br />
      <FetchProgrammingJoke />
      <br />
    </div>
  );
}
