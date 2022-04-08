import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from '../../const';
import GlobalStyle from '../../theme/globalStyle';
import theme from '../../theme/theme';
import MainPage from '../main-page/main-page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
