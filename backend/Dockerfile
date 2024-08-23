FROM node:20 AS development

WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile \
&& yarn cache clean

COPY . .

RUN yarn build

CMD yarn install; yarn start:debug;