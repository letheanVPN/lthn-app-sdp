# 

Lethean VPN Api

- API version: 1

Distributed Virtual Private Marketplace


*Automatically generated by the [OpenAPI Generator](https://openapi-generator.tech)*

## Licence



for more information visit []()

## Requirements

Building the API client library requires:

1. Java 1.7+
2. Maven/Gradle

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Generate manually

At first generate the JAR by executing:

```shell
mvn clean package
```

Use the Jar file to generate the Qt Client:

```shell
java -jar target/openapi-generator-cli.jar generate -i <yourOpenApiFile> -g cpp-qt-client -o <outputDir>
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

example.h:

```c++

#include <iostream>
#include "../client/OAIDefaultApi.h"

using namespace test_namespace;

class Example : public QObject {
    Q_OBJECT
public slots:
   void exampleFunction1();
};

```
example.cpp:

```c++

#include "../client/OAIDefaultApi.h"
#include "example.h"
#include <QTimer>
#include <QEventLoop> 

 return obj;
}

void Example::exampleFunction1(){
     OAIDefaultApi apiInstance;
           apiInstance.cacheStats();
      QTimer::singleShot(5000, &loop, &QEventLoop::quit);
      loop.exec();
  }

```

## Documentation for API Endpoints

All URIs are relative to *https://dvpm.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OAIDefaultApi* | [**cacheStats**](OAIDefaultApi.md#cacheStats) | **GET** /v1/cache/index | 
*OAIDefaultApi* | [**sigVerify**](OAIDefaultApi.md#sigVerify) | **GET** /v1/signature/get | 
*OAIProviderApi* | [**findAll**](OAIProviderApi.md#findAll) | **GET** /v1/provider/search | 
*OAIServicesApi* | [**create**](OAIServicesApi.md#create) | **POST** /v1/service/add | 
*OAIServicesApi* | [**findOne**](OAIServicesApi.md#findOne) | **GET** /v1/service/search/{client} | 


## Documentation for Models

 - [OAICertificatesEntity](OAICertificatesEntity.md)
 - [OAIProxySettingsEntity](OAIProxySettingsEntity.md)
 - [OAIServiceEntity](OAIServiceEntity.md)
 - [OAITimeRangeEntity](OAITimeRangeEntity.md)
 - [OAIVpnSettingsEntity](OAIVpnSettingsEntity.md)


## Documentation for Servers

Parameterized Servers are supported. Define a server in the API for each endpoint with arbitrary numbers of variables: 

```
servers:
- url: http://{server}:{port}/{basePath}
  description: Description of the Server
  variables:
    server:
        enum:
          - 'petstore'
          - 'qa-petstore'
          - 'dev-petstore'
        default: 'petstore'
    port:
      enum:
        - '3000'
        - '1000'
      default: '3000'
    basePath:
      default: v1
```
To change the default variable, use this function in each Api:
```
    int setDefaultServerValue(int serverIndex,const QString &operation, const QString &variable,const QString &val);
```
The parameter "serverIndex" will choose a server from the server list for each endpoint. There is always at least one server with index 0. The Paramter "operation" should be the desired endpoint operationid. 
Variable is the name of the variable you wish to change and the value is the new default Value.
The function will return -1 when the variable does not exists, -2 if value is not defined in the variable enum and -3 if the operation is not found.

If your endpoint has multiple server objects in the servers array, you can set the server that will be used with this function:
```
    void setServerIndex(const QString &operation, int serverIndex);
```
Parameter "operation" should be your operationid. "serverIndex" is the index you want to set as your default server. The function will check if there is a server with your index.
Here is an example of multiple servers in the servers array. The first server will have index 0 and the second will have index 1.
```
servers:
- url: http://{server}:8080/
  description: Description of the Server
  variables:
    server:
        enum:
          - 'petstore'
          - 'qa-petstore'
          - 'dev-petstore'
        default: 'petstore'
- url: https://localhost:8080/v1
```


## Documentation for Authorization

All endpoints do not require authorization.
Authentication schemes defined for the API:

## Author


