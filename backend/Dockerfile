FROM node:18.16.0-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci -qy

COPY src .

EXPOSE 3000

CMD ["npm", "start"]
