
# Usar a imagem base do Node.js
FROM node:22

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o código da aplicação
COPY . .

# Expõe a porta que o serviço usa
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]