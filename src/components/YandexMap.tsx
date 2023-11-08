import { useState, useEffect, useRef } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { MapSection } from './MapSection';

const YandexMap = () => {
  const [myCoordinates, setMyCoordinates] = useState([58.489678163799724, 31.203418886193724]);
  const [placesList, setPlacesList] = useState([
    {
      place_id: 1,
      name_of_place: 'Цех генерации роботов',
      received_resource: 'Роботы',
      capacity: 20,
      location_coordinates: [58.489678163799724, 31.203418886193724],
      place_icon: 'https://img.icons8.com/plasticine/100/robot.png'
    },
    {
      place_id: 2,
      name_of_place: 'Пекарня',
      received_resource: 'Хлеб',
      capacity: 20,
      location_coordinates: [58.490278023042286, 31.20354639149859],
      place_icon: 'https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/external-bakery-shop-color-line-others-cattaleeya-thongsriphong.png'
    },
    {
      place_id: 3,
      name_of_place: 'Нефтяной насос',
      received_resource: 'Нефть',
      capacity: 7,
      location_coordinates: [58.49011932332594, 31.203280852806106],
      place_icon: 'https://img.icons8.com/plasticine/100/oil-pump-jack.png'
    },
    {
      place_id: 4,
      name_of_place: 'Завод',
      received_resource: 'Запчасти для роботов',
      capacity: 3,
      location_coordinates: [58.489747737563725, 31.204050070106934],
      place_icon: 'https://img.icons8.com/plasticine/60/factory.png'
    },
  ]);

  type PlaceInformationType = {
    place_id: number,
    name_of_place: string,
    received_resource: string,
    capacity: number,
    location_coordinates: number[],
    place_icon: string
  }

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

        {placesList.map((data_place: PlaceInformationType) =>
          // <Placemark geometry={data_place.location_coordinates} options={{
          //   hintContent: 'Собственный значок метки',
          //   balloonContentLayout: "this.state.balloonContent",
          //   balloonPanelMaxMapArea: 1,
          //   openEmptyBalloon: true
          // }}  modules={["geoObject.addon.balloon"]} 
         
          // />

          <Placemark 
            geometry={data_place.location_coordinates} 
            properties={{
              hintContent: data_place.name_of_place,
              balloonContentHeader: data_place.name_of_place,
              balloonContentBody: `
                <div id="driver-2" className="driver-card">
                  Ресурс: <b>${data_place.received_resource}</b><br>
                  Производительность: <b>${data_place.capacity} единиц в минуту</b><br>
                </div>`,
              // iconContent: data_place.name_of_place[0],
            }}
            options={
              {  
                // preset: 'islands#circleIcon', // список темплейтов на сайте яндекса
                // iconColor: 'orange', // цвет иконки, можно также задавать в hex
                iconLayout: 'default#image',
                iconImageHref: data_place.place_icon,
                // iconImageSize: [100,36],
                // iconImageOffset: [-50,-18] 
              }
            }
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
        )}
      </Map> 
      {/* <MapSection /> */}
    </YMaps>
  )
};

export default YandexMap;

