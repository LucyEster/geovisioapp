import { useContext, useEffect, useState } from 'react'
import './NewCatalog.css';
import { MapViewContext } from '../../App';
import { postCoordinate, postGeoCatalog } from '../../services/resquests';

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
  const handleNameChange = (event) => setCatalog({...catalog, name: event.target.value});
  const handleContactChange = (event) => setCatalog({...catalog, contact: event.target.value});

  useEffect(() => {
    let url = 'https://api.weatherapi.com/v1/current.json';

  
    url = url + "?" + new URLSearchParams({
      q: `${centerMap?.latitude},${centerMap?.longitude}`,
      key: "YOUR_API_HERE",
    })

    if(centerMap)
    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCatalog({
          ...catalog, 
          city: data.location.name,
          region: data.location.region,
          country: data.location.country,
          name: centerMap.name,
          contact: centerMap.contact,
      })
      })
      .catch((error) => {
        console.log("Aconteceu um erro")
        console.error('Error:', error);
        //reject(error);
      });
  },[centerMap]);

  const onImageChange = (event) => {

    const isJpeg = event.target.files[0].name.split(".")[1] === "jpeg" ||
                   event.target.files[0].name.split(".")[1] === "jpg"

    if (event.target.files && event.target.files[0]) {
       if (!isJpeg) {
         alert('Você só pode registrar imagens jpeg/jpg.');
         return;
       }
       let reader = new FileReader();
       reader.onload = (e) => {
         setCatalog({...catalog, img_source: e.target.result});
         event.target.value = null;
       };
       reader.readAsDataURL(event.target.files[0]);
    }
  }

    const handleSendInfo = () => { 
        postGeoCatalog(catalog);
        setShowNewCatalog(false);
        setCatalog({});
    }

    const handleSaveRegionInfo = async () => {
      postCoordinate(catalog).then((result) => {

        if(result.status === 200) {
          alert("Região salva com sucesso!")
        } else {
          alert("Houve um problema ao salvar localização. Tente novamente mais tarde.")
        }
        
        console.log(result)
      })
    }

    const handleClose = () => { 
        setShowNewCatalog(false);
    }
    
  return active ? (
    <div id="NewCatalog-geoInfoInputbg">
        <div className="NewCatalog-geoInfoInput">
            <div className="NewCatalog-closeBtn" onClick={handleClose}>
                <i className="fa fa-2x fa-xmark"></i>
            </div>
            <div className="NewCatalog-newInput">
                Adicione informações da região:
                <div className="NewCatalog-latlngView">
                    <input disabled maxLength="144" value={centerMap.latitude} type="text" id="latitudeInput"/>
                    <input disabled maxLength="144" value={centerMap.longitude} type="text" id="longitudeInput"/>
                    <input disabled maxLength="144" value={catalog?.city} type="text" id="nameInput"/>
                    <input disabled maxLength="144" value={catalog?.region} type="text" id="regionInput"/>
                    <input disabled maxLength="144" value={catalog?.country} type="text" id="countryInput"/>
                    <input 
                      disabled={!!centerMap.name} 
                      value={centerMap.name ?? catalog?.name} 
                      required 
                      maxLength="144" 
                      type="text" 
                      placeholder="Adicione um nome" 
                      onChange={handleNameChange}
                      />
                    <input 
                      disabled={!!centerMap.contact}
                      value={centerMap.contact ?? catalog?.contact} 
                      required 
                      maxLength="144" 
                      type="text" 
                      placeholder="Adicione um contato" 
                      onChange={handleContactChange}
                      />
                    <span disabled={!!centerMap.contact} onClick={handleSaveRegionInfo} className="NewCatalog-addBtn">Salvar localização</span>
                </div>
                
                <div className="NewCatalog-divider"/>
                Adicione um título:
                <input required maxLength="144" type="text" onChange={handleTitleChange}/>
                Adicione uma descrição:
                <textarea required maxLength="4000" name="descrip" onChange={handleDescChange}></textarea>
                Inclua uma hashtag:
                <input required maxLength="40" type="text" onChange={handleHashtagChange}/>
                <div id="uploadImgView">
                    <label htmlFor="inputCatalogImg">
                        Selecione uma imagem<br/>
                        <i className="fa fa-2x fa-camera"></i>
                        <input id="inputCatalogImg" accept="image/jpeg" onChange={onImageChange} type="file"/>
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