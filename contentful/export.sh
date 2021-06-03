#! /bin/bash

# Exports all the data in a Contentful instance to this local folder
# This requires contentful-cli to be installed

spaceId="${1:-$SPACE_ID}"

if [ -n "$spaceId" ]; then
    envId="${ENV_ID:-master}"
    
    contentful space export \
        --space-id $spaceId \
        --environment-id $envId \
        --export-dir ./data \
        --download-assets true \
        --save-file true
else
    echo "Provide an spaceId as the first and only parameter"
fi