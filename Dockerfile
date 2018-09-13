FROM node:8-alpine AS dependencies

RUN apk add --no-cache git python make g++
WORKDIR /app
COPY package.json .
COPY yarn.lock . 
RUN yarn install

FROM node:8-alpine

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/package.json .
COPY src/ src/

ENV PATH="/app/src:${PATH}"
