# Use a lightweight Node.js image
FROM node:22.14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
COPY vite.config.ts ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy only necessary files
COPY . .

# Expose Vite's default port (if using Vite)
EXPOSE 5173

# Command to start the application
CMD ["npm", "run", "dev"]