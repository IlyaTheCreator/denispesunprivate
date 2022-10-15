import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { store } from './store';

import { MOCK_ARTICLE } from './constants/mocks';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Article from './pages/Article/Article';
import Layout from './components/Layout/Layout';

const theme = extendTheme({
  fonts: {
    body: `'Open Sans', sans-serif`,
  },
});

const App = () => {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/article"
                element={<Article data={MOCK_ARTICLE} />}
              />
            </Routes>
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
