import { render, screen } from "@testing-library/react";
import RenderAnyJoke from "../../pages/api/RenderAnyJoke";

describe("testing if we find a certain div", () => {
  it("Should find the div named header", async () => {
    render(<RenderAnyJoke data={undefined} />);

    const container = screen.getByRole("generic");
    expect(container).toBeVisible();
  });
});
