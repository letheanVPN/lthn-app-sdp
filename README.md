# sdp

Please dont run this on a live server for now.

Docker Hub: https://hub.docker.com/r/lthn/sdp

```dockerfile
version: '3.8'
services:
  dynamodb-local:
    command: "-jar DynamoDBLocal.jar -sharedDb -dbPath ./data"
    image: "amazon/dynamodb-local:latest"
    container_name: dynamodb-local
    ports:
      - "8000:8000"
    volumes:
      - "./docker/dynamodb:/home/dynamodblocal/data"
    working_dir: /home/dynamodblocal
  sdp-server:
    image: lthn/sdp
    build:
      context: .
    container_name: lethean-sdp
    environment:
      - IS_OFFLINE=true
    ports:
      - "8080:3000"


```
