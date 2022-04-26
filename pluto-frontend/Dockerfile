FROM node:12.16.1-alpine3.9 as build

MAINTAINER Hitesh Tripathi

WORKDIR /codeplayer_frontend
COPY package*.json /codeplayer_frontend/
RUN yarn
COPY . /codeplayer_frontend
RUN yarn build

FROM nginx:alpine

MAINTAINER Hitesh Tripathi

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /codeplayer_frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
