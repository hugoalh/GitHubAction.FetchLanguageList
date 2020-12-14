FROM node:14
WORKDIR /github/workspace
COPY package*.json /
COPY lib/main.js /
RUN ["npm", "install"]
ENTRYPOINT ["node", "main.js"]
