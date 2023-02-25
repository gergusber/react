import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvents from "@testing-library/user-event"


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

    test('should show the text button when not clicked', () => {
      // AAA
      //ARRANGE => SET UP TEST DATA
      //ACT => RUN THE LOGIC.
      //ASSERT => HAVE A LOOK OF THE OUTPUT

      // ARRANGE
      render(<Greeting />);


      //ASSERT
      const firstParagraphElement = screen.getByText('Its a good to see you', { exact: true });
      expect(firstParagraphElement).toBeInTheDocument();
    })


    test('should show the text button when is clicked', () => {
      // AAA
      //ARRANGE => SET UP TEST DATA
      //ACT => RUN THE LOGIC.
      //ASSERT => HAVE A LOOK OF THE OUTPUT

      // ARRANGE
      render(<Greeting />);

      //ACT
      const buttonElement = screen.getByRole('button')
      userEvents.click(buttonElement)


      //ASSERT
      const paragraphChangedElement = screen.getByText('Changed', { exact: true });
      expect(paragraphChangedElement).toBeInTheDocument()
    })


    test('should not show the text of first paragraph button when is clicked', () => {
      // AAA
      //ARRANGE => SET UP TEST DATA
      //ACT => RUN THE LOGIC.
      //ASSERT => HAVE A LOOK OF THE OUTPUT

      // ARRANGE
      render(<Greeting />);

      //ACT
      const buttonElement = screen.getByRole('button')
      userEvents.click(buttonElement)


      //ASSERT
      const paragraphChangedElement = screen.queryByText('Its a good to see you', { exact: true });
      expect(paragraphChangedElement).toBeNull()
    })
  })
