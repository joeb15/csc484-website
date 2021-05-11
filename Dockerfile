FROM node:12
WORKDIR /usr/src/app
EXPOSE 3000

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY public ./public
COPY src ./src

RUN ["npm", "run", "build"]
ENTRYPOINT ["npm", "run", "prod"]
