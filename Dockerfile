FROM node:16

WORKDIR /core

COPY public /core/public
COPY src /core/src
COPY package.json /core

RUN npm install

CMD ["npm", "start"]