FROM node:20-slim AS base

WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
# install dependencies into temp directory
# this will cache them and speed up future builds
RUN mkdir -p /temp/dev
COPY package.json bun.lockb package-lock.json /temp/dev/
RUN cd /temp/dev && npm install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb package-lock.json /temp/prod/
RUN cd /temp/prod && npm install --frozen-lockfile --omit=dev

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
RUN npm run build

# copy production dependencies and source code into final image
FROM base AS release
# Use production node environment by default.
ENV NODE_ENV production
ENV ORIGIN https://store.beznet.org
 
# Run the application as a non-root user.
USER node

COPY package.json .

COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/dist ./dist
COPY --from=prerelease /usr/src/app/server ./server


EXPOSE 3000/tcp
CMD npm start