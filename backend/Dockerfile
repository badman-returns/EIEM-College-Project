FROM node:12 as base

WORKDIR /home/node/app

COPY package*.json ./
COPY /data/Menus.json ./data/Menus.json
COPY /uploads ./

RUN npm i


COPY . .

ENV DOCKERIZE_VERSION v0.6.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

CMD dockerize -wait tcp://mysql:3306 -timeout 60m npm start

FROM base as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --only=production

RUN npm run build

COPY . .

