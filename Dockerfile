FROM node:14
COPY package*.json /
COPY lib/main.js /
RUN ["npm", "install"]
ENTRYPOINT ["/main.js"]
