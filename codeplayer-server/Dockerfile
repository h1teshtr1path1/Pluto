FROM node:12

MAINTAINER Hitesh Tripathi 
WORKDIR /codeplayer-server
COPY package*.json ./

RUN npm install
COPY . .

CMD ["node", "app.js"]
