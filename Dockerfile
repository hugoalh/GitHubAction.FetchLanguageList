FROM node:14
COPY package*.json /github/workspace/
COPY main.js /github/workspace/main.js
RUN ["npm", "install"]
ENTRYPOINT ["node", "main.js"]
