FROM node:14-alpine

ENV NODE_ENV=production

RUN apk add git

WORKDIR /app
COPY package*.json /app
RUN npm install --production
COPY . /app

EXPOSE 8080

CMD [ "npm", "start" ]
