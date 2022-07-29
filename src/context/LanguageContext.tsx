import React, { useContext, useState } from 'react'

interface IThemeContext {
  language: string;
  setLanguage?: any;
}

const defaultState = {
  language: 'es',
};

export const LanguageContext = React.createContext<IThemeContext>(defaultState)

export const useLanguageContext = () => useContext(LanguageContext);

export default function LanguageProvider(children: any) {
  const [language, setLanguage] = useState(defaultState.language)

  return <LanguageContext.Provider value={{ language, setLanguage }}>
    {children}
  </LanguageContext.Provider>
}


// import React, {useState} from 'react'


// // interface IThemeContext {
// //   language: string;
// //   setLanguage?: any;
// // }

// const defaultState = {
//   language: 'es',
// };

// const Context = React.createContext<{ language: string,
//   setLanguage: any}>(language)

// export function LanguageContextProvider ({children}) {
//   const [language, setLanguage] = useState()
//   return <Context.Provider value={{language, setLanguage}}>
//     {children}
//   </Context.Provider>
// }

// export default Context