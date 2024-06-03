import styles from "@/pages/index.module.css";
import FetchAnyJoke from "../api/FetchAnyJoke";
import FetchSFWJoke from "../api/FetchSFWJoke";
export default function Home() {
  return (
    <main>
      <div>
        <FetchSFWJoke />
        <FetchAnyJoke />
      </div>
    </main>
  );
}
