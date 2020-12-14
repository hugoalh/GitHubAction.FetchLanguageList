FROM node:14
COPY package*.json /
COPY lib /lib
RUN ["npm", "install"]
RUN "ls"
ENTRYPOINT ["node", "lib/main.js"]
