FROM node:10
WORKDIR  /app
COPY package*.json ./
RUN npm install
COPY . /app
CMD node start.js
EXPOSE 5000