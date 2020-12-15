FROM node:14
WORKDIR fetch_language_list
COPY package*.json ./
COPY main.js ./main.js
RUN ["npm", "install"]
ENTRYPOINT ["node", "fetch_language_list/main.js"]
