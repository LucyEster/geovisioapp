import { useState, useCallback, useContext, memo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { getCoordinates, postCoordinate } from '../services/resquests'
import { MapViewContext } from '../App';

const containerStyle = {
  display: 'flex',
  width: '100%',
  height: '60em'
};

const center = {
  lat: -22.96745138237839,
  lng: -42.02653679337193
};

const Map = ({active}) => {

  const { centerMap } = useContext(MapViewContext);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const [map, setMap] = useState(null)

  const placeMarker = (location) => {
    new window.google.maps.Marker({
      position: location, 
      map: map
    });
    postCoordinate(location.lat(), location.lng())
  }

  const fulfillMarkersFromAPI = useCallback(async () => {
    if(!map) return;

    const result = await getCoordinates();

    result?.map((coordinate) => {
      return new window.google.maps.Marker({
        position: {
          lat: coordinate.latitude, 
          lng: coordinate.longitude
        },
        map: map
      })
    })
  }, [map])

  const addMarkerListener = useCallback(() => {
    if (!map) return;

    let mapEvent = window.google.maps.event;
    mapEvent.addListener(map, 'click', (event) => placeMarker(event.latLng)); 
  }, [map])

  const onCenter = useCallback(() => {
    if(!map || !centerMap) return;
    console.log(centerMap)
    map.setCenter(
      new window.google.maps.LatLng(centerMap.latitude, centerMap.longitude)
    )
    map.setZoom(15);
  } , [map, centerMap])

  const onLoad = useCallback((map) => setMap(map), [])

  const onUnmount = useCallback((map) => setMap(null), [])

  addMarkerListener()
  fulfillMarkersFromAPI()
  onCenter()

  return isLoaded && active ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <></>
      </GoogleMap>
  ) : <></>
}

export default memo(Map)