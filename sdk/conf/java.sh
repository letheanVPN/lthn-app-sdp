openapi-generator-cli generate -i ./openapi.yaml -g java -o ./sdk/client/java \
--additional-properties=artifactUrl=https://dvpm.io,apiPackage=org.lthn.vpm.client.api,artifactId=lethean-vpm-java-client,\
developerEmail=contact@lethean.io,developerName=LetheanVPN,developerOrganization=Lethean,developerOrganizationUrl=https://lt.hn,\
groupId=org.lthn,invokerPackage=org.lthn.vpm.client,modelPackage=org.lthn.vpm.client.model
