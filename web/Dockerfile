FROM node:18-buster-slim

WORKDIR /usr/src/app

COPY package.json /app

COPY . .

RUN ls -l

RUN npm set progress=false && npm install

EXPOSE 5173

CMD ["npm", "run","dev"]