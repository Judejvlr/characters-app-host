
import MicroFrontend from "./components/microfrontend/MicroFrontEndFunc";

const harryPotterHost = process.env.REACT_APP_HARRY_POTTER_HOST ?? '';
// const microyHost = process.env.REACT_APP_MICRO_Y_HOST ?? '';

export const MicroHarryPotter = () => {
  return (
    <MicroFrontend
      id={1}
      name="Harry-Potter"
      microId="HarryPotter"
      host={harryPotterHost}
      basePath="/harrypotter"
      loadType="not-optimized"
      buildMode="library"
    />
  );
};

// export const MicroY = () => {
//   return (
//     <MicroFrontend
//       id={2}
//       name="Micro-Frontend Y"
//       microId="MicroAppY"
//       host={microyHost}
//       basePath="/micro-y"
//       loadType="optimized"
//       buildMode="regular"
//     />
//   );
// };
