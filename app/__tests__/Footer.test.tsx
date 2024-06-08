import { render, screen } from "@testing-library/react";
import Footer from "../../pages/api/Footer";

describe("testing if footer is rendering", () => {
  it("Should find hidden element", () => {
    render(<Footer />);

    const nullPopover = screen.getByRole("generic", {
      name: "Test",
    });
    expect(nullPopover).toBeVisible();
  });
});
