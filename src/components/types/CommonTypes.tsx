export type PlaceInformationType = {
  place_id: number,
  name_of_place: string,
  received_resource: string,
  capacity: number,
  location_coordinates: number[],
  place_icon: string
}

export type ObjectProps = {
  data_place: PlaceInformationType,
  arrived: boolean
}