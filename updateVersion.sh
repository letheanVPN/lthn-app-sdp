# Get the version from package.json
export PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')
echo "Extracted version: ${PACKAGE_VERSION}"

# Now do the replacement in-place (MacOS/Unix compatible)
REPLACE='^  version: .*$'
WITH="  version: '${PACKAGE_VERSION}'"
sed -i.bak "s#${REPLACE}#${WITH}#g" openapi.yml
