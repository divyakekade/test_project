FROM node:13-alpine
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent 
COPY . ./
CMD ["npm","start"]