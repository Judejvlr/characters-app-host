import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuContainer from "../components/blocks/MenuContainer";
import MenuButton from "../components/elements/MenuButton";


const Home = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const options: {
    image: string,
    title: string,
    url: string
  }[] = [
      {
        image: 'http://wallpapers.net/web/wallpapers/harry-potter-movie-wallpaper-for-desktop-mobiles/thumbnail/lg.jpg',
        title: 'harryPotterCharacters',
        url: '/harry-potter',
      },
      {
        image: 'https://sm.ign.com/t/ign_es/screenshot/1/1-total-ri/1-total-rickall-s2e4brbrtotal-rickall-truly-captures-everyth_xsay.1080.jpg',
        title: 'rickAndMortyCharacters',
        url: '/rick-and-morty'
      }
    ]

  return (
    <MenuContainer>
      {options.map((item) => {
        return (
          <MenuButton
            key={item.title}
            onClick={() => navigate(item.url)}
            text={t(item.title)}
            image={item.image}
          />
        )
      })}
    </MenuContainer>

  );
};

export default Home;
