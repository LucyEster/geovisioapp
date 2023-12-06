import React from 'react'
import './NewCatalog.css';

const NewCatalog = () => {
  return (
    <div id="NewCatalog-geoInfoInputbg">
        <div className="NewCatalog-geoInfoInput">
            <div className="NewCatalog-closeBtn" onclick="closeWindow('geoInfoInputbg')">
                <i className="fa fa-2x fa-xmark"></i>
            </div>
            <div className="NewCatalog-newInput">
            Coordenada selecionada:
                <div className="NewCatalog-latlngView">
                    Latitude:
                    <input disabled maxlength="144" type="text" id="latitudeInput"/>
                    Longitude: 
                    <input disabled maxlength="144" type="text" id="longitudeInput"/>
                </div>
                Adicione um título:
                <input required maxlength="144" type="text" id="titleInput"/>
                Adicione uma descrição:
                <textarea required maxlength="4000" name="descrip" id="descInput"></textarea>
                Inclua uma hashtag:
                <input required maxlength="40" type="text" id="hashtagInput"/>
                <div id="uploadImgView">
                    <label for="inputCatalogImg">
                        Selecione uma imagem<br/>
                        <i className="fa fa-2x fa-camera"></i>
                        <input id="inputCatalogImg" type="file"/>
                        <br/>
                        <span id="imageName"></span>
                    </label>
                </div>
                <br></br><img id="catalogImgPreview" src="#"/>
                <span onclick="newGeoCatalog()" className="NewCatalog-addBtn">Adicionar ao catálogo</span>
            </div>
        </div>
    </div>
  )
}

export default NewCatalog