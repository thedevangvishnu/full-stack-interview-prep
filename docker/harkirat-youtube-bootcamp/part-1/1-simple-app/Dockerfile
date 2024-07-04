FROM node:20-alpine

WORKDIR /user/src/app

COPY ./package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]