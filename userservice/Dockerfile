# Dockerfile for service1
FROM node:latest


# Create and set working directory
WORKDIR /userservice

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --silent

# Copy the rest of the app files
COPY . .

# Expose the port your service runs on (e.g., 3001)
EXPOSE 4000

# Start the service
CMD ["node", "index"]