import { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = () => {
  const [myCoordinates, setMyCoordinates] = useState([0, 0]);
  const [coordinatesList, setCoordinatesList] = useState([
    {
      place_id: 1,
      name_of_place: "Кузница",
      location_coordinates: [58.489678163799724, 31.203418886193724]
    },
    {
      place_id: 2,
      name_of_place: "Пекарня",
      location_coordinates: [58.490278023042286, 31.20354639149859]
    },
    {
      place_id: 3,
      name_of_place: "Госпиталь",
      location_coordinates: [58.49011932332594, 31.203280852806106]
    },
    {
      place_id: 4,
      name_of_place: "Завод",
      location_coordinates: [58.489747737563725, 31.204050070106934]
    },
  ]);

  // const changeFriendCoordinates = (e: any) => {
  //   e.preventDefault();

  //   console.clear();
  //   console.log(e.get('coords'))
  //   // setFriendCoordinates(e.get('coords'));
  // };

  useEffect(() => {
    // получаю местоположение пользователя и сохраняю его
    navigator.geolocation.getCurrentPosition((position) => {
      setMyCoordinates([+position.coords.latitude, +position.coords.longitude]);
    });
  }, []);

  return (
    <YMaps>
      <Map 
        defaultState={{ center: myCoordinates, zoom: 17, balloonMaxWidth: 200, searchControlProvider: 'yandex#search'
      }}
        // onClick={changeFriendCoordinates}
      >
        <Placemark geometry={myCoordinates} />

        {coordinatesList.map((coordinates) =>
          <Placemark geometry={coordinates.location_coordinates} />
        )}
      </Map>
    </YMaps>
  )
};

export default YandexMap;