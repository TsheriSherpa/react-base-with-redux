FROM node:lts-alpine3.12 as build

WORKDIR /frontend

COPY package.json /frontend

COPY package-lock.json /frontend

RUN npm install

COPY . /frontend

ENTRYPOINT ["sh", "/frontend/entrypoint.sh"]
