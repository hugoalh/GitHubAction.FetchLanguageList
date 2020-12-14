FROM node:14
COPY package*.json /${GITHUB_WORKSPACE}/
COPY main.js /${GITHUB_WORKSPACE}/main.js
RUN ["npm", "install"]
ENTRYPOINT ["node", "/${GITHUB_WORKSPACE}/main.js"]
