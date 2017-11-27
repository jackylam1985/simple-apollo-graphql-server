FROM node:8-alpine

RUN apk update && apk add git

WORKDIR /app

COPY package.json /app/
RUN npm install

COPY . /app/

EXPOSE 3000
CMD npm run dev

