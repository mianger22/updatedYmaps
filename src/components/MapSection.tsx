import React, {useState} from 'react'
import './yandex-map-restyle-ballon.scss' // стили для карты и балуна
import {Map, Placemark} from 'react-yandex-maps'
import { Portal } from './Portal'
import BallonComponent from './BallonComponent'

export const MapSection = () => {
  const [ activePortal, setActivePortal ] = useState(false);

  return (
    <section className={'map-section'}>
			<Map
         defaultState={{
         	center: [58.49011932332594, 31.203280852806106], 
         	zoom: 10, 
         	modules: [ 'geoObject.addon.balloon', 'geoObject.addon.hint' ],
           balloonMaxWidth: 200, searchControlProvider: 'yandex#search'
         }}

         
        >
            {/* <Placemark geometry={ [58.49011932332594, 31.203280852806106] }
              options={
                {
                  preset: 'islands#circleIcon', // список темплейтов на сайте яндекса
                  iconColor: 'green', // цвет иконки, можно также задавать в hex
                } }
              properties={
                {
                iconContent: '2', // пару символов помещается
                hintContent: '<b> Я появляюсь при наведении на метку </b>',
                // создаём пустой элемент с заданными размерами
                balloonContent: ,
              }	}
              onClick={ () => {
                // alert("clicked")
              // ставим в очередь промисов, чтобы сработало после отрисовки балуна
              setTimeout(() => { setActivePortal(true)}, 0)
              } } /> */}

          <Placemark 
            geometry={ [58.49011932332594, 31.203280852806106] } 
            properties={{
              hintContent: '<b> Я появляюсь при наведении на метку </b>',
              balloonContent: '<div id="driver-2" className="driver-card"></div>'
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            onClick={() => {
              setTimeout(() => { setActivePortal(true)}, 0)
            }}
          />
      </Map>
	{
    activePortal && <Portal getHTMLElementId='driver-2'>
                    <BallonComponent />
										</Portal>
  } 

  {/* {
    activePortal && <div id="driver-2" className="driver-card"></div>
  } */}
  </section>
)}