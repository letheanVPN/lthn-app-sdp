#!/bin/bash
# NOTE : Quote it else use array to avoid problems #
BASE_DIR=$(dirname "$(pwd)")
package="*"
while getopts p: flag
do
    case "${flag}" in
        p) package=${OPTARG}.json;;
        *) ;;
    esac
done

FILES=$(pwd)"/sdk/conf/$package"
export PACKAGE_VERSION=$(cat "$(pwd)/package.json" \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')
for f in $FILES
do
  echo "Processing $f file..."
  # take action on each file. $f store current file name
  filename=$(basename "$f" .json)
  rm -rf "$BASE_DIR"/sdk/client/"$filename"/*
  openapi-generator-cli generate -i "$BASE_DIR"/dvpm/openapi.yaml -g "$filename" -o "$BASE_DIR"/sdk/client/"$filename" -c "$f" --git-host gitlab.com \
  --git-repo-id projects/sdk/clients/"$filename" --git-user-id lthn.io --artifact-version "${PACKAGE_VERSION}"
  (cd "$BASE_DIR"/sdk/client/"$filename" &&  /bin/sh ./git_push.sh)
done
