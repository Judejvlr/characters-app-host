import { Route, Routes } from 'react-router-dom';
import Content from '../components/blocks/Content';
import { MicroHarryPotter, MicroRickAndMorty } from '../microfrontend';
import Home from '../pages/Home';

const AppContainer = () => {
  return (
    <Content>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/harry-potter" element={<MicroHarryPotter />} />
        <Route path="/rick-and-morty" element={<MicroRickAndMorty />} />
      </Routes>
    </Content>
  );
};

export default AppContainer;
