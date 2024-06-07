import { render, screen } from "@testing-library/react";
import RenderAnyJoke from "../../pages/api/RenderAnyJoke";

describe("testing if we find a certain div", () => {
  const data = "twopart";
  it("Should find the div in twopart", async () => {
    render(<RenderAnyJoke data={data} />);

    const container = screen.getByRole("generic", {
      name: /twopart-label/,
      hidden: true,
    });
    expect(container).toHaveTextContent("Punchline");
  });
});
