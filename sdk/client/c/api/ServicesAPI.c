#include <stdlib.h>
#include <stdio.h>
#include <ctype.h>
#include "ServicesAPI.h"

#define MAX_NUMBER_LENGTH 16
#define MAX_BUFFER_LENGTH 4096
#define intToStr(dst, src) \
    do {\
    char dst[256];\
    snprintf(dst, 256, "%ld", (long int)(src));\
}while(0)


service_entity_t*
ServicesAPI_create(apiClient_t *apiClient, service_entity_t * service_entity )
{
    list_t    *localVarQueryParameters = NULL;
    list_t    *localVarHeaderParameters = NULL;
    list_t    *localVarFormParameters = NULL;
    list_t *localVarHeaderType = list_create();
    list_t *localVarContentType = list_create();
    char      *localVarBodyParameters = NULL;

    // create the path
    long sizeOfPath = strlen("/v1/service/add")+1;
    char *localVarPath = malloc(sizeOfPath);
    snprintf(localVarPath, sizeOfPath, "/v1/service/add");




    // Body Param
    cJSON *localVarSingleItemJSON_service_entity = NULL;
    if (service_entity != NULL)
    {
        //string
        localVarSingleItemJSON_service_entity = service_entity_convertToJSON(service_entity);
        localVarBodyParameters = cJSON_Print(localVarSingleItemJSON_service_entity);
    }
    list_addElement(localVarHeaderType,"application/json"); //produces
    list_addElement(localVarContentType,"application/json"); //consumes
    apiClient_invoke(apiClient,
                    localVarPath,
                    localVarQueryParameters,
                    localVarHeaderParameters,
                    localVarFormParameters,
                    localVarHeaderType,
                    localVarContentType,
                    localVarBodyParameters,
                    "POST");

    if (apiClient->response_code == 201) {
        printf("%s\n","The record has been successfully created.");
    }
    if (apiClient->response_code == 403) {
        printf("%s\n","Forbidden.");
    }
    //nonprimitive not container
    cJSON *ServicesAPIlocalVarJSON = cJSON_Parse(apiClient->dataReceived);
    service_entity_t *elementToReturn = service_entity_parseFromJSON(ServicesAPIlocalVarJSON);
    cJSON_Delete(ServicesAPIlocalVarJSON);
    if(elementToReturn == NULL) {
        // return 0;
    }

    //return type
    if (apiClient->dataReceived) {
        free(apiClient->dataReceived);
        apiClient->dataReceived = NULL;
        apiClient->dataReceivedLen = 0;
    }
    
    
    
    list_free(localVarHeaderType);
    list_free(localVarContentType);
    free(localVarPath);
    if (localVarSingleItemJSON_service_entity) {
        cJSON_Delete(localVarSingleItemJSON_service_entity);
        localVarSingleItemJSON_service_entity = NULL;
    }
    free(localVarBodyParameters);
    return elementToReturn;
end:
    free(localVarPath);
    return NULL;

}

char*
ServicesAPI_findOne(apiClient_t *apiClient, char * client )
{
    list_t    *localVarQueryParameters = NULL;
    list_t    *localVarHeaderParameters = NULL;
    list_t    *localVarFormParameters = NULL;
    list_t *localVarHeaderType = list_create();
    list_t *localVarContentType = NULL;
    char      *localVarBodyParameters = NULL;

    // create the path
    long sizeOfPath = strlen("/v1/service/search/{client}")+1;
    char *localVarPath = malloc(sizeOfPath);
    snprintf(localVarPath, sizeOfPath, "/v1/service/search/{client}");


    // Path Params
    long sizeOfPathParams_client = strlen(client)+3 + strlen("{ client }");
    if(client == NULL) {
        goto end;
    }
    char* localVarToReplace_client = malloc(sizeOfPathParams_client);
    sprintf(localVarToReplace_client, "{%s}", "client");

    localVarPath = strReplace(localVarPath, localVarToReplace_client, client);


    list_addElement(localVarHeaderType,"application/json"); //produces
    apiClient_invoke(apiClient,
                    localVarPath,
                    localVarQueryParameters,
                    localVarHeaderParameters,
                    localVarFormParameters,
                    localVarHeaderType,
                    localVarContentType,
                    localVarBodyParameters,
                    "GET");

    if (apiClient->response_code == 200) {
        printf("%s\n","");
    }
    //primitive reutrn type simple
    char* elementToReturn =  strdup((char*)apiClient->dataReceived);

    if (apiClient->dataReceived) {
        free(apiClient->dataReceived);
        apiClient->dataReceived = NULL;
        apiClient->dataReceivedLen = 0;
    }
    
    
    
    list_free(localVarHeaderType);
    
    free(localVarPath);
    free(localVarToReplace_client);
    return elementToReturn;
end:
    free(localVarPath);
    return NULL;

}

