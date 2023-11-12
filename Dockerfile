FROM node:16 as node

WORKDIR /usr/src/app

COPY package.json ./
RUN yarn install

COPY . .
RUN npm start

EXPOSE 80