FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/phone-docker-client

WORKDIR /srv/app/phone-docker-client

COPY package.json /srv/app/phone-docker-client
COPY package-lock.json /srv/app/phone-docker-client

RUN npm install

COPY . /srv/app/phone-docker-client

CMD ["npm", "start"]