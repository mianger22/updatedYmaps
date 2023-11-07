import { useState, useEffect, useRef } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { MapSection } from './MapSection';

const YandexMap = () => {
  const [myCoordinates, setMyCoordinates] = useState([58.489678163799724, 31.203418886193724]);
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
  // };

  useEffect(() => {
    //получаю местоположение пользователя и сохраняю его
    // navigator.geolocation.getCurrentPosition((position) => {
    //   setMyCoordinates([+position.coords.latitude, +position.coords.longitude]);
    // });
  }, []);

  // const multiRoute = new ymaps.multiRouter.MultiRoute(
  //   {
  //     referencePoints: [pointA, pointB],
  //     params: {
  //       routingMode: "pedestrian"
  //     }
  //   },
  //   {
  //     boundsAutoApply: true
  //   }
  // );

  return (
    <YMaps>
      <Map 
        defaultState={{ center: myCoordinates, zoom: 17, balloonMaxWidth: 200, searchControlProvider: 'yandex#search' }}
        // onClick={changeFriendCoordinates}
      >
        {/* <Placemark defaultGeometry={myCoordinates} 
            /> */}

        {coordinatesList.map((coordinates) =>
          // <Placemark geometry={coordinates.location_coordinates} options={{
          //   hintContent: 'Собственный значок метки',
          //   balloonContentLayout: "this.state.balloonContent",
          //   balloonPanelMaxMapArea: 1,
          //   openEmptyBalloon: true
          // }}  modules={["geoObject.addon.balloon"]} 
         
          // />
<Placemark geometry={coordinates.location_coordinates} 
          properties={{
            hintContent: coordinates.name_of_place,
            balloonContent: 'Это балун'
        }}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}

          />

        )}
      </Map> 
      {/* <MapSection /> */}
    </YMaps>
  )
};

export default YandexMap;