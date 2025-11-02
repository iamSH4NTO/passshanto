#!/bin/bash

# Deployment script for x86_64 Ubuntu server

# Check if running on Ubuntu
if ! grep -q Ubuntu /etc/os-release 2>/dev/null; then
    echo "Warning: This script is designed for Ubuntu servers"
    echo "Continuing anyway..."
fi

echo "Deploying PassSHANTO to Ubuntu server (x86_64)..."

# Update system packages
echo "Updating system packages..."
sudo apt update

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker not found. Installing Docker..."
    sudo apt install -y docker.io
    sudo systemctl start docker
    sudo systemctl enable docker
else
    echo "Docker is already installed"
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose not found. Installing Docker Compose..."
    sudo apt install -y docker-compose
else
    echo "Docker Compose is already installed"
fi

# Create data directory if it doesn't exist
if [ ! -d "./data" ]; then
    echo "Creating data directory..."
    mkdir -p ./data
fi

# Check if the Docker image exists
if ! docker images | grep -q "passshanto.*x86_64"; then
    echo "Docker image not found. Building image..."
    ./build-x86_64.sh
    if [ $? -ne 0 ]; then
        echo "Failed to build Docker image. Exiting."
        exit 1
    fi
fi

# Build and deploy using docker-compose
echo "Deploying with docker-compose..."
docker-compose -f docker-compose.x86_64.yml up -d

if [ $? -eq 0 ]; then
    echo "Deployment complete!"
    echo "PassSHANTO should now be running on port 80"
    echo "Check status with: docker-compose -f docker-compose.x86_64.yml ps"
else
    echo "Deployment failed. Please check the logs above."
    exit 1
fi