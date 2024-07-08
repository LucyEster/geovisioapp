import React, { useState, useContext } from 'react';
import './Header.css';
import  Logo  from '../Logo';
import Button from '../Button';
import { getCoordinates } from '../../services/resquests';
import { MapViewContext } from '../../App';

const Header = ({handleShowMap, handleShowCatalogs}) => {

  const [name, setName] = useState();
  const { setCenterMap, setShowNewCatalog } = useContext(MapViewContext);

  const handleSearch = async () => {
    getCoordinates(name).then((result) => {
      if (!result.length) {
        //setCenterMap(result?.[0].latitude, result?.[0].longitude);
        //setShowNewCatalog(true);
        console.log(result)
        alert("Nenhuma instituição encontrada.")
      }else{
        alert("Instituição encontrada!")
        setCenterMap({ 
          latitude: result?.[0]?.latitude, 
          longitude: result?.[0]?.longitude,
          name: result?.[0]?.name,
          contact: result?.[0]?.contact,
        });
        setShowNewCatalog(true);
      }
    })
  }

  return (
    <header>
        <div className="Header">
            <Logo className="Header-logo"/>
            <div className="Header-container">
                <Button onClick={handleShowMap} 
                        faIconName="fa fa-map-location-dot"
                        text={"Mapa"}
                        >
                    
                </Button>
                <Button onClick={handleShowCatalogs} 
                        faIconName="fa fa-book-atlas"
                        text={"Catálogos"}
                        >
                    
                </Button>
                {
                  /*
                <div className="Header-search">
                  <input 
                    required 
                    maxLength="144" 
                    type="text" 
                    placeholder="Adicione catálogo pelo nome da localidade" 
                    onChange={(event) => setName(event.target.value)}
                  />
                  
                </div>
                <div className="Header-btn-search">
                  <span onClick={handleSearch} className="NewCatalog-addBtn">Pesquisar</span>
                </div>
                  */
                }

            </div> 
        </div>     
    </header>
  )
}

export default Header
