FROM node:19.2-alpine3.16

#cd app
WORKDIR /app

#Dest /app
COPY app.js package.json ./

#install dependecias
RUN npm install

#comando que se ejecutra cuando se hace el run de la aplicacion
CMD [ "node", "app.js" ]