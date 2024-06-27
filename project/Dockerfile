# Usa a imagem oficial do Node como imagem base
FROM node:14-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do package.json e do yarn.lock (ou package-lock.json)
COPY package.json .
COPY package-lock.json .

# Instala as dependências do projeto
RUN npm install

# Copia todo o restante do código fonte para o diretório de trabalho
COPY . .

# Compila o projeto para produção
RUN npm build

# Define o comando padrão a ser executado quando o container for iniciado
CMD ["npm", "start"]