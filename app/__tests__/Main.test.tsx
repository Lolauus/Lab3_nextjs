import { render, screen } from "@testing-library/react";
import Main from "../../pages/api/Main";

describe("testing if Main is rendering", () => {
  it("Should find the div in main-component", () => {
    render(<Main />);

    const container = screen.getByRole("generic", {
      name: /component-render/i,
      hidden: true,
    });
    expect(container).toBeVisible();
  });
});
