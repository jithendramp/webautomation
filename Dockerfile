FROM node:8.4 AS builder

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

ENV CI=true

RUN npm install

FROM node:8.4.0-alpine

WORKDIR /usr/src/app

RUN npm config set unsafe-perm true \
    && npm -g install serve \
    && npm config set unsafe-perm false

COPY --from=builder /usr/src/app .

ENTRYPOINT ["npm", "run", "test:e2e"]
