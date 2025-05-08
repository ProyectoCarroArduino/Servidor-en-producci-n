FROM node:18

# Instalar clang y dependencias necesarias
RUN apt-get update && apt-get install -y \
    clang \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar package.json y package-lock.json (o yarn.lock)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto en el que se ejecuta tu aplicación
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "start"]