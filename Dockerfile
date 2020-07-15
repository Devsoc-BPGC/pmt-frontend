FROM node:alpine

WORKDIR /usr/src/pmt-frontend/client/

COPY ./package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm","start"]