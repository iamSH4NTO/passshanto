#!/bin/bash

# Verification script for x86_64 setup

echo "Verifying x86_64 setup for PassSHANTO..."

# Check if required files exist
echo "Checking required files..."

FILES=(
    "Dockerfile.x86_64"
    "docker-compose.x86_64.yml"
    "build-x86_64.sh"
    "deploy-x86_64.sh"
    "X86_64_DEPLOYMENT.md"
    "X86_64_SUMMARY.md"
    "web-vault"
    ".dockerignore"
)

MISSING_FILES=()

for file in "${FILES[@]}"; do
    if [ ! -e "$file" ]; then
        echo "❌ Missing: $file"
        MISSING_FILES+=("$file")
    else
        echo "✅ Found: $file"
    fi
done

# Check if web-vault has content
if [ -d "web-vault" ] && [ "$(ls -A web-vault)" ]; then
    echo "✅ web-vault directory is populated"
else
    echo "❌ web-vault directory is empty or missing"
fi

# Check if scripts are executable
if [ -x "build-x86_64.sh" ] && [ -x "deploy-x86_64.sh" ]; then
    echo "✅ Build and deploy scripts are executable"
else
    echo "❌ Build and deploy scripts are not executable"
fi

# Summary
if [ ${#MISSING_FILES[@]} -eq 0 ]; then
    echo ""
    echo "🎉 All files are present and correctly configured!"
    echo "You can now proceed with building and deploying PassSHANTO on your x86_64 Ubuntu server."
    echo ""
    echo "To build the Docker image:"
    echo "  ./build-x86_64.sh"
    echo ""
    echo "To deploy to your Ubuntu server:"
    echo "  ./deploy-x86_64.sh"
else
    echo ""
    echo "⚠️  Some files are missing. Please check the list above."
fi