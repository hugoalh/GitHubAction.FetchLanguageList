FROM node:14
COPY package*.json ./
COPY lib ./
RUN "npm install"
RUN "node main.js"
