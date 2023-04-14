FROM node
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3000 
EXPOSE 27016
CMD ["npm","start"]