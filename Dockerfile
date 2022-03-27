FROM node:16-alpine3.15 as main
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/
# El "*" es necesario para que la app se muestre en el navegador (sino, funciona pero rechaza la conexion)
# Así copia el package.json y package-lock.json, el cual es importante
COPY package*.json .
RUN npm install
COPY . .

# DEVELOP ENVIRONMENT STAGE
FROM main as dev
EXPOSE 80
CMD [ "npm", "run", "dev" ]

# PRODUCTION ENVIRONMENT STAGE
FROM main as build
RUN npm run docker:build

FROM nginx:1.21.6-alpine as prod
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
