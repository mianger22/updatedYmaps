// import { useEffect, useState } from "react";
import { useState } from "react";
// import Authentification from './components/authorization/Authentification';
// import Main from "./components/content/Main";
// import { Link } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Registration from './components/pages/Registration';
import Authorization from './components/pages/Authorization';

function App() {
  const [isTokenExists, setTokenExists] = useState(false);

  // const toggleAuth = (e: any) => {
  //   e.preventDefault();

  //   setAuthed(!isAuthed);
  // }

  // <Link to="/">Главная страница</Link>
  // </li>
  // <li>
  //   <Link to="/registration">Регистрация</Link>
  // </li>
  // <li>
  //   <Link to="/authorization">Авторизация</Link>
  // </li>

  return (
    <>
    {isTokenExists ? 
      <BrowserRouter>
        <Routes>
          <Route index element={<Home /> } />
          <Route path="registration" element={<Registration />} />
          <Route path="authorization" element={<Authorization />} />
        </Routes>
      </BrowserRouter>
      : 
      <BrowserRouter>
        <Routes>
          <Route index element={<Home /> } />
          <Route path="registration" element={<Registration />} />
          <Route path="authorization" element={<Authorization />} />
        </Routes>
      </BrowserRouter>}
    </>
    // <div className='col-lg-8 mx-auto p-4 py-md-5'>
    //   <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
    //     <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
    //       <span className="fs-4">Convenient navigation</span>
    //       <span>{isAuthed ? <Link to="/" onClick={toggleAuth}>Выйти</Link> : <Link to="/" onClick={toggleAuth}>Войти</Link>}</span>
    //     </a>
    //   </header>
    //   <main>
    //     { isAuthed ? <Main /> : <Authentification /> }
    //   </main>
    //   <footer className="pt-5 my-5 text-body-secondary border-top">
    //     Created by the Ustinnov corporation · © 2023
    //   </footer>
    // </div>
  );
}

export default App;