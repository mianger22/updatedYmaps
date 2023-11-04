import { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

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
          <Map defaultState={{ center: [+currentLatitude, +currentLongitude], zoom: 17 }}>
            <Placemark defaultGeometry={[+currentLatitude, +currentLongitude]} />
          </Map>
      }
    </YMaps>
  )
};

export default YandexMap;