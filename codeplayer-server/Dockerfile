FROM node:12

# MAINTAINER Hitesh Tripathi 
WORKDIR /codeplayer-server
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 5001
CMD ["node", "app.js"]
