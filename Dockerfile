FROM node:8.12.0-alpine
RUN mkdir /src
WORKDIR /src
COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json

RUN npm install --silent
RUN npm install -g knex
COPY ./ /src

EXPOSE 4500

CMD ["node", "index.js"]