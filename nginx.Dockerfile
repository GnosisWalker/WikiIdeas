FROM node:18.16.0-alpine AS frontend

WORKDIR /app

COPY ./frontend/package*.json .
RUN npm ci -qy

COPY ./frontend/public ./
COPY ./frontend/*.ts ./frontend/*.json ./frontend/*.html ./
COPY ./frontend/src ./src

RUN npm run build

FROM nginx:1.23.4

WORKDIR /var/www/html

COPY --from=frontend /app/dist /var/www/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80