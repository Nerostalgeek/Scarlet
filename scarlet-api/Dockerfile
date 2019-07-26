FROM node:10.16.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .

RUN npm i
EXPOSE 3000
CMD [ "npm", "start" ]
