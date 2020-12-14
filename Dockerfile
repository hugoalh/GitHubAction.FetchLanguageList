FROM node:14
COPY package*.json /
COPY main.js /main.js
RUN ["npm", "install"]
ENTRYPOINT ["node", "/main.js"]
