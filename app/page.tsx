import FetchAnyJoke from "@/pages/api/FetchAnyJoke";
import FetchSFWJoke from "@/pages/api/FetchSFWJoke";

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
