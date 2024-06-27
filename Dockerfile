FROM oven/bun:1.1.8-slim AS base
WORKDIR /usr/src/application

COPY package.json .

COPY --chown=bun:bun node_modules node_modules
COPY --chown=bun:bun dist ./dist
COPY --chown=bun:bun server ./server

EXPOSE 3000/tcp