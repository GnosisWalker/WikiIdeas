FROM node:12.10.0-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm i -qy

COPY ./src .

EXPOSE 3000

CMD ["npm", "start"]
