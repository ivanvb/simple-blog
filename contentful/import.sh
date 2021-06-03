#! /bin/bash

# Imports all the data from this folder to a Contentful instance. In case there is no
# data in this directory first run export.sh from your old Contentful instance.
# This requires contentful-cli to be installed

spaceId="${1:-$SPACE_ID}"

if [ -n "$spaceId" ]; then
    envId="${ENV_ID:-master}"
    contentFileName=$(ls ./data | grep contentful-export)
    
    cd ./data
    contentful space import \
        --space-id $spaceId \
        --environment-id $envId \
        --content-file "$contentFileName" \
else
    echo "Provide an spaceId as the first and only parameter"
fi