import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          harryPotterCharacters: 'Personajes de Harry Potter',
          rickAndMortyCharacters: 'Personajes de Rick y Morty',
          goBack: 'Volver',
          harryPotter: 'Harry Potter',
          rickAndMorty: 'Rick y Morty'
        }
      },
      en: {
        translation: {
          harryPotterCharacters: `Harry Potter's characters`,
          rickAndMortyCharacters: `Rick and Morty's characters`,
          goBack: 'Go Back',
          harryPotter: 'Harry Potter',
          rickAndMorty: 'Rick and Morty'
        }
      }
    },
    lng: localStorage.getItem('lang') ?? '',
    fallbackLng: "es",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;