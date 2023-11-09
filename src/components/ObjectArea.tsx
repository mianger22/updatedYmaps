import { Circle } from 'react-yandex-maps';
import { ObjectProps, PlaceInformationType } from './types/CommonTypes';

function ObjectArea(props: ObjectProps) {
  const object_data: PlaceInformationType = props.data_place;
  
  return (
    <Circle
        geometry={[object_data.location_coordinates, 2]}
        properties={{
          hintContent: object_data.name_of_place,
          balloonContent: object_data.name_of_place,
          // iconContent: data_place.name_of_place[0],
        }}
        options={{
          draggable: true,
          fillColor: "#DB709377",
          strokeColor: "#990066",
          strokeOpacity: 0.8,
          strokeWidth: 1,
          // iconLayout: 'default#image',
          //   iconImageHref: 'https://img.icons8.com/plasticine/100/oil-pump-jack.png',
        }} />
  );
}

export default ObjectArea;
