#!/usr/bin/env bash
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
  openapi-generator-cli generate -i ../../openapi.yaml -g "$filename" -o sdk/client/"$filename" -c "$f" --git-host github.com \
  --git-repo-id sdp-api-"$filename" --git-user-id LetheanMovement --artifact-version "${PACKAGE_VERSION}" --group-id lethean \
  -p packageVersion="${PACKAGE_VERSION}" --global-property apiTests=true
  (cp -f sdk/build/git_push.sh sdk/client/"$filename"/git_push.sh)
done
