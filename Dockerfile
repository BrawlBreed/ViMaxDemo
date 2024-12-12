# nodejs-app/Dockerfile

# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Serve the Next.js app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the built app from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --production

# Expose the application port
EXPOSE 3000

# Define the default command
CMD ["npm", "start"]
