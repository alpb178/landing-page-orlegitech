import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageSelector } from "@/components/LanguageSelector";

describe("LanguageSelector", () => {
  it("shows a pointer cursor on the trigger button", () => {
    render(<LanguageSelector />);
    expect(
      screen.getByRole("button", { expanded: false })
    ).toHaveClass("cursor-pointer");
  });

  it("shows a pointer cursor on every language option", async () => {
    const user = userEvent.setup();
    render(<LanguageSelector />);

    await user.click(screen.getByRole("button", { expanded: false }));

    const options = within(screen.getByRole("list")).getAllByRole("button");
    expect(options).toHaveLength(3);
    options.forEach((option) => expect(option).toHaveClass("cursor-pointer"));
  });
});
