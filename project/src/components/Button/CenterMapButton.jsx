import { useContext } from 'react'
import { MapViewContext } from '../../App'
import './Button.css';


const CenterMapButton = ({latitude, longitude, index}) => {

  const { setShowMap, setShowCatalogs, setCenterMap } = useContext(MapViewContext)

  const handleViewMap = () => {
    setShowCatalogs(false);
    setShowMap(true);
    setCenterMap({ latitude, longitude });
  }

  return (
        <div className="CenterMapButton" onClick={handleViewMap}>
            <i className="fa fa-location-crosshairs"></i>
            {' '}
            Vizualizar no mapa
        </div>
  );
}

export default CenterMapButton;