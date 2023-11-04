import { ReactNode, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Layout({ children, ...props }: Props) {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [isAuthed, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setAuth(true);
    }
    // alert(isAuthed);
  }, [isAuthed])

  const exit = () => {
    // убираем статус авторизованного пользователя
    setAuth(false);

    // редиректим на страницу авторизации
    navigate('authorization');

    localStorage.removeItem("authToken");
  }

  return (
    <div className='col-lg-8 mx-auto p-4 py-md-5'>
      <header className="d-flex align-items-center justify-content-between pb-3 mb-5 border-bottom">
        <div className="fs-4">Convenient navigation</div>
        {isAuthed && <div><button className="btn btn-outline-dark btn-sm" onClick={exit}>Выйти</button></div>}
      </header>
      <main {...props}>
        {children}
      </main>
      <footer className="pt-5 my-5 text-body-secondary border-top">
        Created by the Ustinnov Corporation · © 2023
      </footer>
    </div>
  );
}