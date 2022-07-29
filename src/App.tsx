import AppHeader from './pages/AppHeader';
import { GlobalStyle } from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { AppTheme } from './theme/theme';
import AppContainer from './pages/AppContainer';
import './config/i18n';


function App() {

  return (
    <div className="Micro-App">
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle />
        <AppHeader />
        <AppContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;

