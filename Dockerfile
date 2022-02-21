FROM node:16-alpine as build

COPY package.json /app/package.json
WORKDIR /app
RUN npm install --development

COPY . .

RUN npm run build

FROM keymetrics/pm2:16-alpine as final

COPY package.json /app/package.json
WORKDIR /app
RUN npm install --production --legacy-peer-deps

COPY pm2.json .
COPY --from=build /app/dist/ /app/dist
COPY openapi.yaml /app/dist/openapi.yaml
COPY frontend /app/frontend
COPY data /app/data

CMD [ "pm2-runtime", "start", "pm2.json" ]

