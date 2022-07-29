import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../components/elements/Button";
import { MenuContainer } from "../components/elements/MenuContainer";


const Home = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const options: {
    image: string,
    title: string,
    url: string
  }[] = [
      {
        image: 'http://3.bp.blogspot.com/_sSkEbHhdKpI/TKvnbLdcWpI/AAAAAAAAA2s/YtKOVuZ4Jyc/s1600/harry+potter.jpg',
        title: 'harryPotter',
        url: '/harry-potter',
      },
      {
        image: 'https://i.pinimg.com/originals/cd/64/b5/cd64b55e77d50844e82ebb7fe572d91e.jpg',
        title: 'rickAndMorty',
        url: '/rick-and-morty'
      }
    ]

  return (
    <MenuContainer>
      {options.map((item) => {
        return (
          <Button
            key={item.title}
            onClick={() => navigate(item.url)}
            center
            width="50%"
          >
            {t('seeCharactersOf') + ' ' + t(`${item.title}`)}
          </Button>
        )
      })}
    </MenuContainer>
  );
};

export default Home;
