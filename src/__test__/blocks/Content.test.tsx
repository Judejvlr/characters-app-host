import { screen } from "@testing-library/react";
import Content from "../../components/blocks/Content";
import { render } from "../../utils/test-util";


test(('Content render properly'), () => {
  render(<Content>
    <p>Test</p>
  </Content>)
  expect(screen.getByTestId('menu-container')).toHaveStyle(`
  width: 100vw;
  padding-top: 3rem; 
  `)
})
