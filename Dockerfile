FROM node:14
COPY package*.json /
COPY lib/main.js /main.js
RUN ["npm", "install"]
RUN "ls"
ENTRYPOINT ["node", "main.js"]
