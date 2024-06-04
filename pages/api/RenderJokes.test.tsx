import { render, screen, within } from "@testing-library/react";
import RenderJoke from "./RenderJoke";

describe("testingn need to change ifstatement in component to data", () => {
  const data = "twopart";
  it("Should find the div in twopart", () => {
    render(<RenderJoke data={data} />);

    const container = screen.getByRole("generic", {
      name: /twopart-label/,
      hidden: true,
    });
    expect(container).toHaveTextContent("Category");
  });
});
