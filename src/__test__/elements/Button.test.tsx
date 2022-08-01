import { screen } from "@testing-library/react";
import Button from "../../components/elements/Button";
import { render } from "../../utils/test-util";


test(('Button render properly'), () => {
  const testButton = {
    text: 'Test',
  }
  render(<Button>{testButton.text}</Button>)
  expect(screen.getByText(testButton.text)).toHaveTextContent(testButton.text)
})
