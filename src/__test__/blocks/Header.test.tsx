import { screen } from "@testing-library/react";
import Header from "../../components/blocks/Header";
import { AppTheme } from "../../theme/theme";
import { render } from "../../utils/test-util";


test(('Header render properly'), () => {
  render(<Header justifyItems="flex-end">
    <p>Test</p>
    <p>Test</p>
  </Header>)
  expect(screen.getByTestId('menu-container')).toHaveStyle(`
  box-sizing: border-box;
  display: flex;
  justify-content: 'flex-end';
  background-color: ${AppTheme.palette.background.light};
  height: 3rem;
  width: 100vw;
  position:fixed;
  padding: 0.25rem 1.25rem;
  z-index: 1;
  `)
})
