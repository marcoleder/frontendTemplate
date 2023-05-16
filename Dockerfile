FROM node:18.12.1 as build
# Set container working directory to /app
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Build the app
RUN npm run build

# make image smaller by using multi stage build
FROM node:18.12.1-alpine
# Set the env to "production"
ENV NODE_ENV production
# get non-root user
USER node
# Set container working directory to /app
WORKDIR /app
RUN mkdir build
# copy node modules and app
COPY --chown=node:node --from=build /app/node_modules /app/node_modules
COPY --chown=node:node --from=build /app/build build
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# start app
CMD [ "npx", "serve", "build" ]