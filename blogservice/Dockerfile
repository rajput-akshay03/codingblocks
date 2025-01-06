# Dockerfile for service1
FROM node:16-alpine

#Install FFmpeg
# RUN apk add --no-cache ffmpeg

# Create and set working directory
WORKDIR /blogservice

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --silent

# Copy the rest of the app files
COPY . .

# Expose the port your service runs on (e.g., 3001)
EXPOSE 3000

# Start the service
CMD ["node", "index"]