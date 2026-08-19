FROM node:24.19.0-alpine3.24

LABEL maintainer="@hodlerhacks"

WORKDIR /var/opt/balance-bot-v2
COPY package*.json .
RUN npm ci
COPY . .

EXPOSE 3000

CMD [ "node", "bb.js" ]