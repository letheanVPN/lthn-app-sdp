#include <stdlib.h>
#include <stdio.h>
#include "../include/apiClient.h"
#include "../include/list.h"
#include "../external/cJSON.h"
#include "../include/keyValuePair.h"
#include "../include/binary.h"
#include "../model/service_entity.h"


service_entity_t*
ServicesAPI_create(apiClient_t *apiClient, service_entity_t * service_entity );


char*
ServicesAPI_findOne(apiClient_t *apiClient, char * client );


