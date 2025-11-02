#!/bin/bash

# Build script for x86_64 architecture
echo "Building PassSHANTO for x86_64 architecture..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed. Please install Docker first."
    exit 1
fi

# Build the Docker image
echo "Building Docker image..."
docker build -f Dockerfile.x86_64 -t passshanto:x86_64 .

# Check if build was successful
if [ $? -eq 0 ]; then
    # Tag the image for Docker Hub
    docker tag passshanto:x86_64 iamsh4nto/passshanto:x86_64
    
    echo "Build complete!"
    echo "To run the container locally:"
    echo "  docker run -d -p 80:80 --name passshanto passshanto:x86_64"
    echo ""
    echo "To deploy with docker-compose:"
    echo "  docker-compose -f docker-compose.x86_64.yml up -d"
else
    echo "Build failed. Please check the Dockerfile and try again."
    exit 1
fi