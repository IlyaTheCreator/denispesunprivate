import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
