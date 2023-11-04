import { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = () => {
  const [currentCoordinates, setCoordinates] = useState([0, 0]);

  useEffect(() => {
    // получаю местоположение пользователя и сохраняю его
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates([+position.coords.latitude, +position.coords.longitude]);
    });
  }, []);

  return (
    <YMaps>
      <Map defaultState={{ center: currentCoordinates, zoom: 17 }}>
        <Placemark defaultGeometry={currentCoordinates} />
      </Map>
    </YMaps>
  )
};

export default YandexMap;