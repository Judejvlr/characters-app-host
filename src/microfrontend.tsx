
import MicroFrontend from "./components/microfrontend/MicroFrontEndFunc";

const harryPotterHost = process.env.REACT_APP_HARRY_POTTER_HOST ?? '';
const rickAndMortyHost = process.env.REACT_APP_RICK_AND_MORTY_HOST ?? '';

export const MicroHarryPotter = () => {
  return (
    <MicroFrontend
      id={1}
      name="Harry-Potter"
      microId="HarryPotter"
      host={harryPotterHost}
      basePath="/harry-potter"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};

export const MicroRickAndMorty = () => {
  return (
    <MicroFrontend
      id={2}
      name="Rick-And-Morty"
      microId="RickAndMorty"
      host={rickAndMortyHost}
      basePath="/rick-and-morty"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};
