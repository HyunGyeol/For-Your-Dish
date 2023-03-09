import Main from 'pages/Main';
import Header from 'components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from 'pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Main />}></Route>
          <Route path={'/mypage'} element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
