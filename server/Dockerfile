FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/phone-docker-server

WORKDIR /srv/app/phone-docker-server

COPY package.json /srv/app/phone-docker-server
COPY package-lock.json /srv/app/phone-docker-server

RUN npm install

COPY . /srv/app/phone-docker-server

CMD ["npm", "run", "dev"]