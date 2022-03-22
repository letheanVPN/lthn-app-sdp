FROM keymetrics/pm2:latest-slim as build

COPY src src/
COPY package.json .
COPY pm2.json .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# git auto-pull
RUN pm2 install pm2-auto-pull
RUN pm2 set pm2-auto-pull:interval 60000

# Monitor Server
RUN pm2 install pm2-server-monit


CMD [ "pm2-runtime", "start", "pm2.json" ]
