# GeoVisio APP

  

Este APP tem por princípio realizar a **manipulação de dados** com **base geográfica**.

  

À partir de **coordenadas** obtidas à partir do mapa, é possível cadastrar itens que são chamados de **catálogos geográficos**. Com a conexão com a **Weather API**, associamos a coordenada à uma cidade, região e país de qualquer lugar do mundo.
  

## Qual é a aplicação deste app?



Se você possui qualquer tipo de **dado georreferenciado**, é possível utilizar para **associar informações** do seu negócio à essas **coordenadas**.



É aplicável às áreas de:

- Agro (mapeamento de safras, escoamento, status de lavouras);

- Petróleo (mapeamento de dados sobre extração e/ou potencial extração);

- Geológico (mapeamento de terreno);

- Biológico (catalogação de fauna, flora, etc.)

- Mobilidade (transportes, pontos de taxi, ônibus, etc.)

- Saúde pública (mapeamento de UBS, ações de vacinação por região)

- Segurança (tático, policial, criminalidade)

- Defesa Civil (Pontos de alagamento, risco de barrancos, etc.)

Para fins de exemplo, usaremos o sistema para cadastro de pontos de coleta de doações em diversas regiões do Brasil.



Funciona da seguinte forma:

1. Para cada **coordenada** cadastrada, é possível cadastradar um ou vários **catálogos**. Cada coordenada recebe informações de cidade, região e país da API externa. Adicionamos nome e contato na coordenada, para melhor identificá-la.

2. Cada catálogo possui **título, descrição, hashtag, imagem** e estará **associada à uma coordenada**.

3. Dada uma **hashtag**, é possível **filtrar catálogos** que utilizam essa hastag.

4. Com a associação de nome e região, é possível buscar pela instituição e estado para melhor visualização.

   

## Arquitetura



Este projeto é a componente principal do projeto. A componente secundária é o backend, e as APIs externas são a do **Google Maps API** e **Weather API**.



<img src="project/img/arq.jpg" width="300px"/>



## Como executar

### APP React

- Este projeto utiliza a **Google Maps JS API**. Para que o mapa funcione, será necessário adicionar uma chave de API do Google.

    1. Se você quiser criar uma chave própria, siga essas instruções presentes [aqui](https://support.google.com/looker-studio/answer/10988075?hl=pt-BR).
    2. Se você for utilizar a chave disponibilizada por mim, ela estará disponível até **30/07/2024** e está restrita à funcionar apenas no link [http://localhost:3000](http://localhost:3000). Portanto, a app deve estar aberta apenas nesse link.
    3. Adicione a chave em **src>components>Map.jsx**, linha 23:

```
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_KEY_HERE"
  })
```

- Este projeto também utiliza a **Weather API** como API externa. Para ativar as requisições é preciso adicionar a chave no arquivo **src/components/NewCatalog/index.jsx**, linha 33:

```
    url = url + "?" + new URLSearchParams({
      q: `${centerMap?.latitude},${centerMap?.longitude}`,
      key: "YOUR_KEY_HERE",
    })
```
Esta chave também estará disponível até o dia **30/07/2024**. Caso haja problemas com a chave favor me contactar no Discord ou gerar uma nova chave apenas se cadastrando no site. A documentação se encontra no site oficial [www.weatherapi.com](https://www.weatherapi.com)

## Scripts

Este projeto utiliza docker para sua execução. O docker-compose.yml está na raiz do projeto. Para rodá-lo, utilize o comando:

### `docker-compose up --build`
Para instalar as dependências do projeto frontend (React) e backend (Flask, Python)

Roda o app no modo desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver ele funcionando no Brownser.
> Para rodar o app, é preciso que a **geovisio_api** esteja funcionando na rota [http://localhost:5000](http://localhost:5000)!
[Link para o repositório do Github do geovisio_api](https://github.com/LucyEster/geovisio_api)


## Imagens (V2 - atualizada)

### Aba Mapa
<img src="project/img/inicial.PNG" width="500px"/>


### Cadastro de catálogo ( com busca de regiões )
<img src="project/img/cadastro_catalogo_regiao.PNG" width="500px"/>


### Aba Catálogos geral
<img src="project/img/catálogos1.PNG" width="500px"/>

### Aba Catálogos filtro região
<img src="project/img/catálogos2.PNG" width="500px"/>

## Imagens (V1)

### Aba Mapa
<img src="project/img/home-mapa.PNG" width="500px"/>


### Cadastro de catálogo
<img src="project/img/home-cadastro-catalogo.PNG" width="500px"/>


### Aba Catálogos
<img src="project/img/catálogos.PNG" width="500px"/>


## Saiba Mais

Veja a documentação:

- [Create React App docs](https://facebook.github.io/create-react-app/docs/getting-started).

- [React documentation](https://reactjs.org/).
