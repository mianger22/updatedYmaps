import Layout from "../Layout";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import YandexMap from "../YandexMap";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    if (!localStorage.getItem('authToken') && location === "/") {
      // редиректим на страницу авторизации
      navigate('/authorization');
    }
  })

  return (
    <Layout>
      <YandexMap />
    </Layout>
  );
}