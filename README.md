# GeoVisio APP

  

Este APP tem por princípio realizar a **manipulação de dados** com **base geográfica**.

  

À partir de **coordenadas** obtidas à partir do mapa, é possível cadastrar itens que são chamados de **catálogos geográficos**.

  

Nesta primeira versão:

- Ao clicar em um ponto do mapa, uma coordenada será salva no banco de dados através da API;

- Abrirá uma janela de cadastro de um item de catálogo;

- Ao clicar em "Adicionar catálogo", você cadastrará um catálogo geográfico;

- Na Aba "catálogos" será possível visualizar uma lista de catálogos geográficos;

- Ainda na Aba "catálogos" será possível filtrar catálogos pelas hashtags e centralizar catálogo no mapa.

  

Para backlog futuro, esta APP fornecerá:

  

- Edição e remoção de catálogos e coordenadas;

- Categorização de grandes áreas;

- Rotas de acompanhamento de atualização de catálogos em linha de tempo para determinada coordenada (é possível já cadastrar mais de um catálogo geográfico para uma determinada coordenada);

- Rotas para Sistema de login.

  

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

  

Funciona da seguinte forma:

1. Para cada **coordenada** cadastrada, é possível cadastradar um ou vários **catálogos**.

2. Cada catálogo possui **título, descrição, hashtag, imagem** e estará **associada à uma coordenada**.

3. Dada uma **hashtag**, é possível **filtrar catálogos** que utilizam essa hastag.

  

## Como executar

### APP React

- Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

- Após clonar o repositório, certifique-se que tenha instalado o [node.js](https://nodejs.org/en).

- Este projeto utiliza a **Google Maps JS API**. Para que o mapa funcione, será necessário adicionar uma chave de API do Google.

    1. Se você quiser criar uma chave própria, siga essas instruções presentes [aqui](https://support.google.com/looker-studio/answer/10988075?hl=pt-BR).
    2. Se você for utilizar a chave disponibilizada por mim, ela estará disponível até **20/12/2023** e está restrita à funcionar apenas no link [http://localhost:3000](http://localhost:3000). Portanto, a app deve estar aberta apenas nesse link.
    3. Adicione a chave em **src>components>Map.jsx**, linha 23:

```
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_KEY_HERE"
  })
```

## Scripts

> Para rodar o app, é preciso que a **geovisio_api** esteja funcionando na rota [http://localhost:5000](http://localhost:5000)!
[Link para o repositório do Github do geovisio_api](https://github.com/LucyEster/geovisio_api)

No diretório do projeto, você pode rodar:

### `npm install`
Para instalar todas as dependências contidas no package.json

### `npm start`

Roda o app no modo desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver ele funcionando no Brownser.

## Imagens

### Aba Mapa
<img src="img/home-mapa.PNG" width="900px"/>


### Cadastro de catálogo
<img src="img/home-cadastro-catalogo.PNG" width="900px"/>


### Aba Catálogos
<img src="img/catálogos.PNG" width="900px"/>



## Saiba Mais

Veja a documentação:

- [Create React App docs](https://facebook.github.io/create-react-app/docs/getting-started).

- [React documentation](https://reactjs.org/).
