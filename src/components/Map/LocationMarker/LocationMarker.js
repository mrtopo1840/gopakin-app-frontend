import React, { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { IconPin } from "../../../assets";
import { IconPinCreation } from "../../../helpers";

export function LocationMarker() {
  /**
   * hacemos uso de la capa del mapa que se esta utilizando en
   * este momento, con un useEffect lo que hacemos es que
   * despues de que se renderice el padre que es mapView
   * va a preguntar la si permite usar la ubicacion en el navegador
   * si permite extrea la informacion de latidud y logintud, se la
   * asignamos a un estado y ya hacemos uso de funciones de la leafleat
   * para poder movernos a la ubicacion actual
   */
  const [position, setPosition] = useState(null);

  //Uso del mapa
  const map = useMap();
  useEffect(() => {
    map
      .locate({ enableHighAccuracy: true, watch: true })
      .on("locationfound", (e) => {
        setPosition(e.latlng.wrap());
        map.flyTo(e.latlng, map.getZoom());
      });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={IconPinCreation(IconPin)}>
      <Popup>Usted esta aqui</Popup>
    </Marker>
  );
}