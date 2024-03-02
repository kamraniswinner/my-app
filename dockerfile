# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the Docker container
COPY package*.json ./

# Install the application dependencies inside the Docker container
RUN npm install

# Copy the application source code into the Docker container
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "dev" ]
