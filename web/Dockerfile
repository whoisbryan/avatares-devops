FROM node:18-buster-slim

WORKDIR /usr/src/app

COPY package.json /app

COPY . .

RUN ls -l

RUN npm set progress=false && npm install

ENV VITE_HOST=0.0.0.0
ENV VITE_PORT=5173

EXPOSE 5173

CMD ["npm", "run","dev"]