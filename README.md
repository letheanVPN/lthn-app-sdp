# SDP Self Hosting

Please dont run this on a live server for now.

## Typescript replacment

Using nestjs it's feature rich but not quite ready as the system moves to rethinkDB. 
https://github.com/letheanVPN/sdp/tree/dev

## Local build

```text
npm install
```

```text
npm start
```

http://localhost:3000

![img.png](.github/img.png)

## Docker

Docker Hub: https://hub.docker.com/r/lthn/sdp

`docker run --detach --name lethean-sdp --expose 3000 --hostname "${HOSTNAME}" lthn/sdp `

- `$ docker exec -it lethean-sdp pm2 monit` 	    Monitoring CPU/Usage of each process
- `$ docker exec -it lethean-sdp pm2 list`	        Listing managed processes
- `$ docker exec -it lethean-sdp pm2 show`	        Get more information about a process
- `$ docker exec -it lethean-sdp pm2 reload all`	0sec downtime reload all applications

```yaml
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
    env_file:
      - src/config.env
    ports:
      - "8080:3000"
      - "8081:3001"
```

## SDP SDK's

- https://github.com/LetheanMovement/sdp-api-ts-fetch
- https://github.com/LetheanMovement/sdp-api-swift5
- https://github.com/LetheanMovement/sdp-api-ruby
- https://github.com/LetheanMovement/sdp-api-powershell
- https://github.com/LetheanMovement/sdp-api-php
- https://github.com/LetheanMovement/sdp-api-elm
- https://github.com/LetheanMovement/sdp-api-dart
- https://github.com/LetheanMovement/sdp-api-c
- https://github.com/LetheanMovement/sdp-api-cpp-qt
- https://github.com/LetheanMovement/sdp-api-rxjs
- https://github.com/LetheanMovement/sdp-api-ts-node
- https://github.com/LetheanMovement/sdp-api-ts-angular
- https://github.com/LetheanMovement/sdp-api-ts
- https://github.com/LetheanMovement/sdp-api-rust
- https://github.com/LetheanMovement/sdp-api-python
- https://github.com/LetheanMovement/sdp-api-js-apollo
- https://github.com/LetheanMovement/sdp-api-java
- https://github.com/LetheanMovement/sdp-api-go
- https://github.com/LetheanMovement/sdp-api-bash
- https://github.com/LetheanMovement/sdp-api-android
