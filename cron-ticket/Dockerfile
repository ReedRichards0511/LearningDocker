FROM --platform=linux/amd64 node:19.2-alpine3.16

#cd app
WORKDIR /app

#Dest /app
COPY package.json ./

#install dependecias
RUN npm install


#Dest /app
COPY . .

#testing

RUN npm run test

#eliminar archivos innecesarios

RUN rm -rf tests && rm -rf node_modules

#instala unicamente las de produccion
RUN npm install --prod

#comando que se ejecutra cuando se hace el run de la aplicacion
CMD [ "node", "app.js" ]