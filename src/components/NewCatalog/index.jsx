import { useContext, useState } from 'react'
import './NewCatalog.css';
import { MapViewContext } from '../../App';
import { postGeoCatalog } from '../../services/resquests';

const NewCatalog = ({active}) => {
    
  const { centerMap, setShowNewCatalog } = useContext(MapViewContext);

  const [catalog, setCatalog] = useState({});

  if (centerMap) {
    if (!catalog?.latitude)
    setCatalog({
        ...catalog, 
        latitude: centerMap.latitude,
        longitude: centerMap.longitude
    })
  }

  const handleTitleChange = (event) => setCatalog({...catalog, title: event.target.value});
  const handleDescChange = (event) => setCatalog({...catalog, description: event.target.value});
  const handleHashtagChange = (event) => setCatalog({...catalog, hashtag: event.target.value});

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          setCatalog({...catalog, img_source: e.target.result});
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    }

    const handleSendInfo = () => { 
        postGeoCatalog(catalog);
        setShowNewCatalog(false);
    }
 

  console.log(catalog)
    
  return active ? (
    <div id="NewCatalog-geoInfoInputbg">
        <div className="NewCatalog-geoInfoInput">
            <div className="NewCatalog-closeBtn" onClick="closeWindow('geoInfoInputbg')">
                <i className="fa fa-2x fa-xmark"></i>
            </div>
            <div className="NewCatalog-newInput">
            Coordenada selecionada:
                <div className="NewCatalog-latlngView">
                    Latitude:
                    <input disabled maxLength="144" value={centerMap.latitude} type="text" id="latitudeInput"/>
                    Longitude: 
                    <input disabled maxLength="144" value={centerMap.longitude} type="text" id="longitudeInput"/>
                </div>
                Adicione um título:
                <input required maxLength="144" type="text" onChange={handleTitleChange}/>
                Adicione uma descrição:
                <textarea required maxLength="4000" name="descrip" onChange={handleDescChange}></textarea>
                Inclua uma hashtag:
                <input required maxLength="40" type="text" onChange={handleHashtagChange}/>
                <div id="uploadImgView">
                    <label for="inputCatalogImg">
                        Selecione uma imagem<br/>
                        <i className="fa fa-2x fa-camera"></i>
                        <input id="inputCatalogImg" onChange={onImageChange} type="file"/>
                        <br/>
                        <span id="imageName"></span>
                    </label>
                </div>
                <br></br><img id="catalogImgPreview" src={catalog.img_source}/>
                <span onClick={handleSendInfo} className="NewCatalog-addBtn">Adicionar ao catálogo</span>
            </div>
        </div>
    </div>
  ) : null
}

export default NewCatalog