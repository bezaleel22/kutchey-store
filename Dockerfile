FROM oven/bun:1.1.8-slim AS base
WORKDIR /usr/src/application

COPY package.json .

COPY node_modules node_modules
COPY dist ./dist
COPY server ./server

EXPOSE 3000/tcp
ENTRYPOINT [ "bun","run","serve" ]