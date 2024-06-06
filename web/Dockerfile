FROM node:20-alpine

RUN mkdir /web
WORKDIR /web

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]