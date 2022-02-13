FROM node:14-alpine

RUN apk add git

WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run build

EXPOSE 5000

#ENV
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

CMD [ "npm", "start" ]
