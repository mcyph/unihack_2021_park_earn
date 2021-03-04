# Get the latest node LTS release
FROM node:14
WORKDIR /src/

# Copy install info to root dir
COPY package*.json ./
RUN npm install

# Run the server on port 3000
EXPOSE 3000
CMD npm start
