import { screen } from "@testing-library/react";
import MenuButton from "../../components/elements/MenuButton";
import { render } from "../../utils/test-util";


test(('MenuButton render properly'), () => {
  const testMenuButton = {
    image: 'http://wallpapers.net/web/wallpapers/harry-potter-movie-wallpaper-for-desktop-mobiles/thumbnail/lg.jpg',
    text: 'harryPotterCharacters',
    onClick: () => { return }
  }
  render(<MenuButton image={testMenuButton.text} text={testMenuButton.text} onClick={testMenuButton.onClick} />)
  expect(screen.getByText(testMenuButton.text)).toHaveTextContent(testMenuButton.text)
})
