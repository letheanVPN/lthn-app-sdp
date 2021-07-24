openapi-generator-cli generate -i ./openapi.yaml -g android -o ../sdk/client/android \
--additional-properties=apiPackage=org.lthn.vpm,artifactId=org.lthn.vpm.client
/bin/sh ../sdk/client/android/git_push.sh lthn.io projects/vpn/sdk/andriod "SDK Update" "gitlab.com"
