FROM node:4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV 'production'
COPY . /usr/src/app
RUN npm install
RUN npm install -g forever

CMD [ "forever" , "--watch" , "--watchDirectory" , "/usr/src/app" , "--watchIgnore" , "node_modules", "./index.js" ]