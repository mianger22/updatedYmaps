import { useState, useEffect } from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const YandexMap = () => {
  const [currentLatitude, setLatitude] = useState(null);
  const [currentLongitude, setLongitude] = useState(null);

  useEffect(() => {
      navigator.geolocation.getCurrentPosition((position: any) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
      });
  }, []);

  return (
    <YMaps>
      {
        currentLatitude && currentLongitude && 
          <Map defaultState={{ center: [+currentLatitude, +currentLongitude], zoom: 9 }} />
      }
    </YMaps>
  )
};

export default YandexMap;