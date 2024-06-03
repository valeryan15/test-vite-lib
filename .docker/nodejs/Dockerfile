FROM node:20.13.1-alpine3.18  as install

LABEL authors="valeryan15"

# Папка приложения
ENV APP_ROOT /var/www
WORKDIR ${APP_ROOT}

COPY package.json yarn.lock ./

RUN yarn install

# Create the application development layer
FROM node:20.13.1-alpine3.18  as develop

EXPOSE 8000

# Create and change into a directory in the container
ENV APP_ROOT /var/www
WORKDIR ${APP_ROOT}

COPY --from=install ${APP_ROOT}/. .

COPY . .