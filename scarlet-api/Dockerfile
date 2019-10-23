FROM node:12.13.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN apk --no-cache add --virtual builds-deps build-base python

COPY . .


RUN npm install

COPY . ./usr/src/app

EXPOSE 6200
CMD [ "npm", "start" ]