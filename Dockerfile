FROM node:lts
COPY package*.json /
COPY lib/main.js /
RUN "npm install"
RUN ["node", "main.js"]
