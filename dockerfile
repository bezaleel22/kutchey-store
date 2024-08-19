FROM oven/bun:1.1.17 AS base
WORKDIR /app

RUN env

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
# ENV NODE_ENV=production
# ENV CHANNEL_TOKEN="Fqw9Pk5YaUbtQ0xfTr6jTUPVZDgpNFWm"
# ENV PAYSTACK_SECRET_KEY="sk_test_414679be0fe780fca20430fb20e338062bd35cf5"
RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /app/build build
COPY --from=prerelease /app/package.json .

EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "start" ]