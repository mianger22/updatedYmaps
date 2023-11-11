import { Circle } from 'react-yandex-maps';
import { ObjectProps, PlaceInformationType } from './types/CommonTypes';
import { CommonProperties } from './common/CommonElements';

function ObjectArea(props: ObjectProps) {
  const object_data: PlaceInformationType = props.data_place;
  const arrived: boolean = props.arrived;
  
  return (
    <Circle
        geometry={[object_data.location_coordinates, 2]}
        properties={CommonProperties(object_data, arrived, props.setArrived, props.setMyCoordinates)}
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
