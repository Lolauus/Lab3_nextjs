import { render, screen, within } from "@testing-library/react";
import RenderJoke from "./RenderJoke";

describe("testing", () => {
  it("should return nothing", () => {
    render(<RenderJoke data={undefined} />);

    const container = screen.getByRole("generic", { name: /twopart-label/i });
    const answer = within(container).queryAllByRole("generic", {
      name: /twopart-label/i,
    });

    expect(answer).toBe(0);
  });
});
