import { PlaceInformationType } from "../types/CommonTypes"

export const CommonProperties = (object_data: PlaceInformationType, arrived: boolean, setArrived: any, setMyCoordinates: any) => {
  interface MyWindow {
    changeStayStatus?: any;
  }
  
  (window as MyWindow).changeStayStatus = function() {
    // сверять координаты, и если игрок на месте, то менять статус пребывания
    navigator.geolocation.getCurrentPosition((position) => {
      const myCoords = [+position.coords.latitude, +position.coords.longitude];

      setMyCoordinates(myCoords);

      if (myCoords === object_data.location_coordinates) {
        setArrived(true);
      } else {
        alert(' Подвинься!, не попал ')
      }
    });
  };

  return {
    hintContent: object_data.name_of_place,
    balloonContentHeader: object_data.name_of_place,
    balloonContentBody: `
      <div className="driver-card">
        Ресурс: <b>${object_data.received_resource}</b><br>
        Производительность: <b>${object_data.capacity} единиц в минуту</b><img width="30" height="30" src="${object_data.resource_icon}" /><br>
        Подсказка: ${object_data.help}
      </div>`,
    balloonContentFooter: !arrived ? `<button onclick="window.changeStayStatus()">Я на месте</button>` : `<div onclick="alert('Захвачена позиция ${object_data.name_of_place}!')">Захватить позицию</div>`,
      // iconContent: data_place.name_of_place[0],
  }
}