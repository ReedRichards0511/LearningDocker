FROM node:19.2-alpine3.16

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



#comando que se ejecutra cuando se hace el run de la aplicacion
CMD [ "node", "app.js" ]