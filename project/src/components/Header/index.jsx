import React from 'react'
import './Header.css';
import  Logo  from '../Logo';
import Button from '../Button';

const Header = ({handleShowMap, handleShowCatalogs}) => {
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
            </div> 
        </div>     
    </header>
  )
}

export default Header
