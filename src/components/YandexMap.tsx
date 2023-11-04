import { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = () => {
  const [myCoordinates, setMyCoordinates] = useState([0, 0]);
  const [friendCoordinates, setFriendCoordinates] = useState([0, 0]);

  const changeFriendCoordinates = (e: any) => {
    e.preventDefault();
    setFriendCoordinates(e.get('coords'));
  };

  useEffect(() => {
    // получаю местоположение пользователя и сохраняю его
    navigator.geolocation.getCurrentPosition((position) => {
      setMyCoordinates([+position.coords.latitude, +position.coords.longitude]);
    });
  }, []);

  return (
    <YMaps>
      <Map 
        defaultState={{ center: myCoordinates, zoom: 17 }}
        onClick={changeFriendCoordinates}
      >
        <Placemark geometry={myCoordinates} />
        {friendCoordinates.toString() !== [0, 0].toString() && <Placemark geometry={friendCoordinates} />}
      </Map>
    </YMaps>
  )
};

export default YandexMap;