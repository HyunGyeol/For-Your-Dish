import Main from 'pages/Main';
import Header from 'components/Header';
import MyPage from 'pages/MyPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Main />}></Route>
          <Route path={'/mypage'} element={<MyPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Main />
    </div>
  );
}

export default App;
