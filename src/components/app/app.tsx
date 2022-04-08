import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/globalStyle';
import theme from '../../theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <h1>Кинотеатр</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
