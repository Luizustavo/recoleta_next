# Use uma imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o package.json e o package-lock.json para o container
COPY package.json package-lock.json ./ 

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta 3000 (onde o Next.js roda por padrão)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
