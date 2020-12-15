FROM node:14
WORKDIR /fetch-language-list
COPY package*.json ./
COPY main.js ./main.js
RUN ["npm", "install"]
WORKDIR /
ENTRYPOINT ["node", "fetch-language-list/main.js"]
