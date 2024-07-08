import './App.css';
import Map from './components/Map';
import GeoCatalogsView  from './components/GeoCatalogsView/index';
import Header from './components/Header';
import { createContext, useState } from 'react';
import NewCatalog from './components/NewCatalog';

export const MapViewContext = createContext(null);

function App() {
  const [showMap, setShowMap] = useState(true);
  const [showCatalogs, setShowCatalogs] = useState(false);
  const [showNewCatalog, setShowNewCatalog] = useState(false)
  const [centerMap, setCenterMap] = useState(null);
  const [hashtag, setHashtag] = useState(null);
  const [region, setRegion] = useState(null);
  const [refetch, setRefetch] = useState(false);

  const handleShowMap = () => {
    setShowMap(true);
    setShowCatalogs(false);
  }

  const handleShowCatalogs = () => {
    setShowCatalogs(true);
    setShowMap(false);
  }

  return (
    <MapViewContext.Provider
      value={{
        showMap,
        centerMap,
        setShowMap,
        setShowCatalogs,
        setCenterMap,
        setShowNewCatalog,
        hashtag,
        setHashtag,
        region,
        setRegion,
        refetch,
        setRefetch
      }}
    >
    <div className="App">
      <Header 
        handleShowMap={handleShowMap} 
        handleShowCatalogs={handleShowCatalogs}/>
      <Map active={showMap}/>
      <GeoCatalogsView active={showCatalogs}/>
      <NewCatalog active={showNewCatalog}/>
    </div>
    </MapViewContext.Provider>
  );
}

export default App;
