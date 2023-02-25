import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe('Greeting component',
  () => {

    test('should have hello world as text', () => {
      // AAA
      //ARRANGE => SET UP TEST DATA
      //ACT => RUN THE LOGIC.
      //ASSERT => HAVE A LOOK OF THE OUTPUT

      // ARRANGE
      render(<Greeting />);

      //ACT
      //  ...NOTHING

      //ASSERT
      const helloElement = screen.getByText('HEllo world!', { exact: true });
      expect(helloElement).toBeInTheDocument();
    })

  })
