FROM node:12-slim
LABEL maintainer="pys99pys@gmail.com"

RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN yarn

CMD ["yarn", "dev"]
