import { render, screen } from "@testing-library/react"
import Async from "./Async";



describe('Async component', () => {
  test('render posts if request succeeds', async () => {
    render(<Async />)

    const elements = await screen.findAllByRole('listitem', {}, {}) // list of roless https://www.w3.org/TR/html-aria/#docconformance

    expect(elements).not.toHaveLength(0)
  });
});