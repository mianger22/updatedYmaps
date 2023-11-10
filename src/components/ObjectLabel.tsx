import { Placemark } from 'react-yandex-maps';
import { ObjectProps, PlaceInformationType } from './types/CommonTypes';
import { CommonProperties } from './common/CommonElements';

function ObjectLabel(props: ObjectProps) {
  const object_data: PlaceInformationType = props.data_place;
  const arrived: boolean = props.arrived;

  return (
    <Placemark 
      geometry={object_data.location_coordinates} 
      properties={CommonProperties(object_data, arrived)}
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
