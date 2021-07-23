# org.lthn.vpm.client

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>org.openapitools</groupId>
    <artifactId>org.lthn.vpm.client</artifactId>
    <version>1.0.0</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "org.openapitools:org.lthn.vpm.client:1.0.0"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

- target/org.lthn.vpm.client-1.0.0.jar
- target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import org.lthn.vpm.DefaultApi;

public class DefaultApiExample {

    public static void main(String[] args) {
        DefaultApi apiInstance = new DefaultApi();
        try {
            apiInstance.cacheStats();
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#cacheStats");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://dvpm.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**cacheStats**](docs/DefaultApi.md#cacheStats) | **GET** /v1/cache/index | 
*DefaultApi* | [**sigVerify**](docs/DefaultApi.md#sigVerify) | **GET** /v1/signature/get | 
*ProviderApi* | [**findAll**](docs/ProviderApi.md#findAll) | **GET** /v1/provider/search | 
*ServicesApi* | [**create**](docs/ServicesApi.md#create) | **POST** /v1/service/add | 
*ServicesApi* | [**findOne**](docs/ServicesApi.md#findOne) | **GET** /v1/service/search/{client} | 
*ServicesApi* | [**list**](docs/ServicesApi.md#list) | **GET** /v1/service/search | 


## Documentation for Models

 - [CertificatesEntity](docs/CertificatesEntity.md)
 - [ProxySettingsEntity](docs/ProxySettingsEntity.md)
 - [ServiceEntity](docs/ServiceEntity.md)
 - [TimeRangeEntity](docs/TimeRangeEntity.md)
 - [VpnSettingsEntity](docs/VpnSettingsEntity.md)


## Documentation for Authorization

All endpoints do not require authorization.
Authentication schemes defined for the API:

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author

contact@lethean.io

