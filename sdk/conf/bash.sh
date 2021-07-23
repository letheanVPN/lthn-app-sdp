openapi-generator-cli generate -i ./openapi.yaml -g bash -o ./sdk/client/bash --additional-properties=apiPackage=lethean_vpm,\
generateBashCompletion,generateZshCompletion,processMarkdown,scriptName=lethean-vpm
