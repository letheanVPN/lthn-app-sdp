FROM node:14-alpine as build
WORKDIR /app
COPY package.json /app

RUN npm install --development

COPY . .

RUN npm run build

FROM keymetrics/pm2:14-alpine as final

COPY package.json /
RUN npm install --production
COPY pm2.json .

COPY --from=build /app/dist /dist
COPY openapi.yaml /dist
COPY frontend /frontend
COPY data /data
CMD [ "pm2-runtime", "start", "pm2.json" ]

