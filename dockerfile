FROM node:14.15.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean
RUN npm install
COPY . /usr/src/app
ENV PORT=8080
EXPOSE 4200
CMD ["npm","start"]
