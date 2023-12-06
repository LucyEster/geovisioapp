/*
  --------------------------------------------------------------------------------------
  Função para converter arquivo em base64
  --------------------------------------------------------------------------------------
*/

export const convertImageToBase64 = async (file) => {
    var reader = new FileReader();
  
    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }

/*
  --------------------------------------------------------------------------------------
  Função para formatar cabeçalho da base64
  --------------------------------------------------------------------------------------
*/
export const formatImage = (img) => img.replace("dataimage/jpegbase64/", "data:image/jpeg;base64,/")

