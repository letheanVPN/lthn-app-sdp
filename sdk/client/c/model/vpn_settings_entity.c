#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include "vpn_settings_entity.h"



vpn_settings_entity_t *vpn_settings_entity_create(
    char *endpoint,
    char *port,
    char *parameters,
    char *terms,
    list_t *policy
    ) {
    vpn_settings_entity_t *vpn_settings_entity_local_var = malloc(sizeof(vpn_settings_entity_t));
    if (!vpn_settings_entity_local_var) {
        return NULL;
    }
    vpn_settings_entity_local_var->endpoint = endpoint;
    vpn_settings_entity_local_var->port = port;
    vpn_settings_entity_local_var->parameters = parameters;
    vpn_settings_entity_local_var->terms = terms;
    vpn_settings_entity_local_var->policy = policy;

    return vpn_settings_entity_local_var;
}


void vpn_settings_entity_free(vpn_settings_entity_t *vpn_settings_entity) {
    if(NULL == vpn_settings_entity){
        return ;
    }
    listEntry_t *listEntry;
    if (vpn_settings_entity->endpoint) {
        free(vpn_settings_entity->endpoint);
        vpn_settings_entity->endpoint = NULL;
    }
    if (vpn_settings_entity->port) {
        free(vpn_settings_entity->port);
        vpn_settings_entity->port = NULL;
    }
    if (vpn_settings_entity->parameters) {
        free(vpn_settings_entity->parameters);
        vpn_settings_entity->parameters = NULL;
    }
    if (vpn_settings_entity->terms) {
        free(vpn_settings_entity->terms);
        vpn_settings_entity->terms = NULL;
    }
    if (vpn_settings_entity->policy) {
        list_ForEach(listEntry, vpn_settings_entity->policy) {
            free(listEntry->data);
        }
        list_free(vpn_settings_entity->policy);
        vpn_settings_entity->policy = NULL;
    }
    free(vpn_settings_entity);
}

cJSON *vpn_settings_entity_convertToJSON(vpn_settings_entity_t *vpn_settings_entity) {
    cJSON *item = cJSON_CreateObject();

    // vpn_settings_entity->endpoint
    if (!vpn_settings_entity->endpoint) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "endpoint", vpn_settings_entity->endpoint) == NULL) {
    goto fail; //String
    }


    // vpn_settings_entity->port
    if (!vpn_settings_entity->port) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "port", vpn_settings_entity->port) == NULL) {
    goto fail; //String
    }


    // vpn_settings_entity->parameters
    if (!vpn_settings_entity->parameters) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "parameters", vpn_settings_entity->parameters) == NULL) {
    goto fail; //String
    }


    // vpn_settings_entity->terms
    if (!vpn_settings_entity->terms) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "terms", vpn_settings_entity->terms) == NULL) {
    goto fail; //String
    }


    // vpn_settings_entity->policy
    if (!vpn_settings_entity->policy) {
        goto fail;
    }
    
    cJSON *policy = cJSON_AddArrayToObject(item, "policy");
    if(policy == NULL) {
        goto fail; //primitive container
    }

    listEntry_t *policyListEntry;
    list_ForEach(policyListEntry, vpn_settings_entity->policy) {
    if(cJSON_AddStringToObject(policy, "", (char*)policyListEntry->data) == NULL)
    {
        goto fail;
    }
    }

    return item;
fail:
    if (item) {
        cJSON_Delete(item);
    }
    return NULL;
}

vpn_settings_entity_t *vpn_settings_entity_parseFromJSON(cJSON *vpn_settings_entityJSON){

    vpn_settings_entity_t *vpn_settings_entity_local_var = NULL;

    // vpn_settings_entity->endpoint
    cJSON *endpoint = cJSON_GetObjectItemCaseSensitive(vpn_settings_entityJSON, "endpoint");
    if (!endpoint) {
        goto end;
    }

    
    if(!cJSON_IsString(endpoint))
    {
    goto end; //String
    }

    // vpn_settings_entity->port
    cJSON *port = cJSON_GetObjectItemCaseSensitive(vpn_settings_entityJSON, "port");
    if (!port) {
        goto end;
    }

    
    if(!cJSON_IsString(port))
    {
    goto end; //String
    }

    // vpn_settings_entity->parameters
    cJSON *parameters = cJSON_GetObjectItemCaseSensitive(vpn_settings_entityJSON, "parameters");
    if (!parameters) {
        goto end;
    }

    
    if(!cJSON_IsString(parameters))
    {
    goto end; //String
    }

    // vpn_settings_entity->terms
    cJSON *terms = cJSON_GetObjectItemCaseSensitive(vpn_settings_entityJSON, "terms");
    if (!terms) {
        goto end;
    }

    
    if(!cJSON_IsString(terms))
    {
    goto end; //String
    }

    // vpn_settings_entity->policy
    cJSON *policy = cJSON_GetObjectItemCaseSensitive(vpn_settings_entityJSON, "policy");
    if (!policy) {
        goto end;
    }

    list_t *policyList;
    
    cJSON *policy_local;
    if(!cJSON_IsArray(policy)) {
        goto end;//primitive container
    }
    policyList = list_create();

    cJSON_ArrayForEach(policy_local, policy)
    {
        if(!cJSON_IsString(policy_local))
        {
            goto end;
        }
        list_addElement(policyList , strdup(policy_local->valuestring));
    }


    vpn_settings_entity_local_var = vpn_settings_entity_create (
        strdup(endpoint->valuestring),
        strdup(port->valuestring),
        strdup(parameters->valuestring),
        strdup(terms->valuestring),
        policyList
        );

    return vpn_settings_entity_local_var;
end:
    return NULL;

}
