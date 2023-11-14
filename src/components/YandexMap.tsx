import { useState, useEffect } from 'react';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import ObjectLabel from './ObjectLabel';
import ObjectArea from './ObjectArea';
import { PlaceInformationType } from './types/CommonTypes';

const YandexMap = () => {
  const [myCoordinates, setMyCoordinates] = useState([0, 0]);
  const [placesList, setPlacesList] = useState([
    {
      place_id: 1,
      name_of_place: 'Цех генерации роботов',
      received_resource: 'Роботы',
      resource_icon: 'https://img.icons8.com/plasticine/30/robot-2.png',
      capacity: 20,
      location_coordinates: [58.489678163799724, 31.203418886193724],
      place_icon: 'https://img.icons8.com/plasticine/100/robot.png',
      help: "Ищи качели"
    },
    {
      place_id: 2,
      name_of_place: 'Пекарня',
      received_resource: 'Круассан',
      resource_icon: 'https://img.icons8.com/plasticine/30/croissant.png',
      capacity: 20,
      location_coordinates: [58.490278023042286, 31.20354639149859],
      place_icon: 'https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/external-bakery-shop-color-line-others-cattaleeya-thongsriphong.png',
      help: "Ищи дуб"
    },
    {
      place_id: 3,
      name_of_place: 'Нефтяной насос',
      received_resource: 'Нефть',
      resource_icon: 'https://img.icons8.com/plasticine/30/oil-industry.png',
      capacity: 7,
      location_coordinates: [58.49011932332594, 31.203280852806106],
      place_icon: 'https://img.icons8.com/plasticine/100/oil-pump-jack.png',
      help: "Ищи железную старую банку"
    },
    {
      place_id: 4,
      name_of_place: 'Завод',
      received_resource: 'Запчасти для роботов',
      resource_icon: 'https://img.icons8.com/plasticine/30/processor.png',
      capacity: 3,
      location_coordinates: [58.489747737563725, 31.204050070106934],
      place_icon: 'https://img.icons8.com/plasticine/60/factory.png',
      help: "Ищи заборчик"
    },
  ]);
  const [arrived, setArrived] = useState(false);

  // const changeFriendCoordinates = (e: any) => {
  //   e.preventDefault();

  //   console.clear();
  //   console.log(e.get('coords'))
  // };

  const myCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setMyCoordinates([+position.coords.latitude, +position.coords.longitude]);
    });
  }

  const detectedNewMyPosition = () => {
    myCurrentPosition();
  }

  useEffect(() => {
    //получаю местоположение пользователя и сохраняю его
    if (myCoordinates.toString() === '0,0') {
      myCurrentPosition();
    }

    if (arrived) {
      alert(' Позиция захвачена ');
    }
  }, [myCoordinates, arrived]);

  // const capture_position_handler = alert(' Позиция захвачена! ')

  return (
    <YMaps>
       <Map 
        defaultState={{ center: myCoordinates, zoom: 17, balloonMaxWidth: 600, searchControlProvider: 'yandex#search' }}
        // onClick={changeFriendCoordinates}
        width='450px'
      >
        <ZoomControl options={{ float: "right" }} />

        <Placemark geometry={myCoordinates} />

        {placesList.map((data_place: PlaceInformationType) =>
          // <Placemark geometry={data_place.location_coordinates} options={{
          //   hintContent: 'Собственный значок метки',
          //   balloonContentLayout: "this.state.balloonContent",
          //   balloonPanelMaxMapArea: 1,
          //   openEmptyBalloon: true
          // }}  modules={["geoObject.addon.balloon"]} 
         
          // />
          <>
            {/* <ObjectLabel data_place={data_place} arrived={arrived} capture_position_handler={capture_position_handler} />
            <ObjectArea data_place={data_place} arrived={arrived} capture_position_handler={capture_position_handler} /> */}

            <ObjectLabel data_place={data_place} arrived={arrived} setArrived={setArrived} setMyCoordinates={setMyCoordinates} />
            <ObjectArea data_place={data_place} arrived={arrived} setArrived={setArrived} setMyCoordinates={setMyCoordinates} />
          </>
        )}
      </Map> 
      <button onClick={detectedNewMyPosition} className='btn btn-dark btn-sm mt-3 ml-5'>Где я</button>
    </YMaps>
  )
};

export default YandexMap;