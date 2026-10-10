FROM node:24-alpine

RUN mkdir /web
WORKDIR /web

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]