#!/bin/bash
# NOTE : Quote it else use array to avoid problems #
BASE_DIR=$(dirname "$(pwd)")
FILES=$(pwd)"/sdk/conf/*"
for f in $FILES
do
  echo "Processing $f file..."
  # take action on each file. $f store current file name
  filename=$(basename "$f" .json)
  rm -rf "$BASE_DIR"/sdk/client/"$filename"/*
  openapi-generator-cli generate -i "$BASE_DIR"/dvpm/openapi.yaml -g "$filename" -o "$BASE_DIR"/sdk/client/"$filename" -c "$f" --git-host gitlab.com \
  --git-repo-id projects/sdk/clients/"$filename" --git-user-id lthn.io
  (cd "$BASE_DIR"/sdk/client/"$filename" &&  /bin/sh ./git_push.sh)
done
