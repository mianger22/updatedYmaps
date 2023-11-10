import { Placemark } from 'react-yandex-maps';
import { ObjectProps, PlaceInformationType } from './types/CommonTypes';

function ObjectLabel(props: ObjectProps) {
  const object_data: PlaceInformationType = props.data_place;
  const arrived: boolean = props.arrived;

  return (
    <Placemark 
      geometry={object_data.location_coordinates} 
      properties={{
        hintContent: object_data.name_of_place,
        balloonContentHeader: object_data.name_of_place,
        balloonContentBody: `
          <div className="driver-card">
            Ресурс: <b>${object_data.received_resource}</b><br>
            Производительность: <b>${object_data.capacity} единиц в минуту</b><img width="30" height="30" src="${object_data.resource_icon}" /><br>
            Подсказка: ${object_data.help}
          </div>`,
        balloonContentFooter: arrived && `<div onclick="alert('Захвачена позиция ${object_data.name_of_place}!')">Захватить позицию</div>`
        // iconContent: object_data.name_of_place[0],
      }}
      options={
        {  
          // preset: 'islands#circleIcon', // список темплейтов на сайте яндекса
          // iconColor: 'orange', // цвет иконки, можно также задавать в hex
          iconLayout: 'default#image',
          iconImageHref: object_data.place_icon,
          // iconImageSize: [100,36],
          // iconImageOffset: [-50,-18] 
        }
      }
      modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
    />       
  );
}

export default ObjectLabel;
