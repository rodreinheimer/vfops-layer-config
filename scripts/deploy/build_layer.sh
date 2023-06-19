#!/bin/bash
set -eo pipefail

#################################################
# Build layers, steps:
#       . copy default.js properties file to each 
#           brand's root directory.
#       . zip content
#           zip will be used by publish-delta.sh
#       . clean up
#################################################

LAYERS_DIR=$1
THIS_LAYER_DIR=$3
OUTPUT_DIR="../../terraform3/$2"
PACKAGE_NAME=$4
NODEJS_DIR="nodejs"
ROOT="../${LAYERS_DIR}/${THIS_LAYER_DIR}/${NODEJS_DIR}"

echo "LAYERS_DIR[${LAYERS_DIR}] OUTPUT_DIR[${OUTPUT_DIR}] LAYER_DIR[${THIS_LAYER_DIR}] PACKAGE_NAME[${PACKAGE_NAME}] NODEJS_ROOT_DIR[${NODEJS_DIR}] ROOT[${ROOT}]"

# Copy default properties file to every brand.
cd $ROOT
find . -maxdepth 1 -mindepth 1 -type d | while IFS= read -r line; do echo `cp default.js ${line}`; done

# Prepare package.
cd ../
zip -vr ${PACKAGE_NAME} ${NODEJS_DIR}/ -x "*.DS_Store"

#copy package to terraform staging directory
cp ${PACKAGE_NAME} ${OUTPUT_DIR}

# Clean up - This is done so local environment is kept clean.
cd ${NODEJS_DIR}
find . -maxdepth 1 -mindepth 1 -type d | while IFS= read -r line; do echo `rm -f ${line}/default.js`; done
