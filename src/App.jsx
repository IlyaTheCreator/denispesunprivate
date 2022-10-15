import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './store';

import { MOCK_ARTICLE } from './constants/mocks';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Article from './pages/Article/Article';
import Layout from './components/Layout/Layout';
import ModalWindow from './components/ModalWindow/ModalWindow';
import { useState } from 'react';

const App = () => {
  const [modalActive, setModalActive] = useState(true)

  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/article"
              element={<Article data={MOCK_ARTICLE} />}
            />
          </Routes>
          <ModalWindow active={modalActive} setActive={setModalActive}/>
        </Layout>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
