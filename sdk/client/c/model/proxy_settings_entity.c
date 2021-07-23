#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include "proxy_settings_entity.h"



proxy_settings_entity_t *proxy_settings_entity_create(
    char *endpoint,
    char *port,
    char *terms,
    list_t *policy
    ) {
    proxy_settings_entity_t *proxy_settings_entity_local_var = malloc(sizeof(proxy_settings_entity_t));
    if (!proxy_settings_entity_local_var) {
        return NULL;
    }
    proxy_settings_entity_local_var->endpoint = endpoint;
    proxy_settings_entity_local_var->port = port;
    proxy_settings_entity_local_var->terms = terms;
    proxy_settings_entity_local_var->policy = policy;

    return proxy_settings_entity_local_var;
}


void proxy_settings_entity_free(proxy_settings_entity_t *proxy_settings_entity) {
    if(NULL == proxy_settings_entity){
        return ;
    }
    listEntry_t *listEntry;
    if (proxy_settings_entity->endpoint) {
        free(proxy_settings_entity->endpoint);
        proxy_settings_entity->endpoint = NULL;
    }
    if (proxy_settings_entity->port) {
        free(proxy_settings_entity->port);
        proxy_settings_entity->port = NULL;
    }
    if (proxy_settings_entity->terms) {
        free(proxy_settings_entity->terms);
        proxy_settings_entity->terms = NULL;
    }
    if (proxy_settings_entity->policy) {
        list_ForEach(listEntry, proxy_settings_entity->policy) {
            free(listEntry->data);
        }
        list_free(proxy_settings_entity->policy);
        proxy_settings_entity->policy = NULL;
    }
    free(proxy_settings_entity);
}

cJSON *proxy_settings_entity_convertToJSON(proxy_settings_entity_t *proxy_settings_entity) {
    cJSON *item = cJSON_CreateObject();

    // proxy_settings_entity->endpoint
    if (!proxy_settings_entity->endpoint) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "endpoint", proxy_settings_entity->endpoint) == NULL) {
    goto fail; //String
    }


    // proxy_settings_entity->port
    if (!proxy_settings_entity->port) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "port", proxy_settings_entity->port) == NULL) {
    goto fail; //String
    }


    // proxy_settings_entity->terms
    if (!proxy_settings_entity->terms) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "terms", proxy_settings_entity->terms) == NULL) {
    goto fail; //String
    }


    // proxy_settings_entity->policy
    if (!proxy_settings_entity->policy) {
        goto fail;
    }
    
    cJSON *policy = cJSON_AddArrayToObject(item, "policy");
    if(policy == NULL) {
        goto fail; //primitive container
    }

    listEntry_t *policyListEntry;
    list_ForEach(policyListEntry, proxy_settings_entity->policy) {
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

proxy_settings_entity_t *proxy_settings_entity_parseFromJSON(cJSON *proxy_settings_entityJSON){

    proxy_settings_entity_t *proxy_settings_entity_local_var = NULL;

    // proxy_settings_entity->endpoint
    cJSON *endpoint = cJSON_GetObjectItemCaseSensitive(proxy_settings_entityJSON, "endpoint");
    if (!endpoint) {
        goto end;
    }

    
    if(!cJSON_IsString(endpoint))
    {
    goto end; //String
    }

    // proxy_settings_entity->port
    cJSON *port = cJSON_GetObjectItemCaseSensitive(proxy_settings_entityJSON, "port");
    if (!port) {
        goto end;
    }

    
    if(!cJSON_IsString(port))
    {
    goto end; //String
    }

    // proxy_settings_entity->terms
    cJSON *terms = cJSON_GetObjectItemCaseSensitive(proxy_settings_entityJSON, "terms");
    if (!terms) {
        goto end;
    }

    
    if(!cJSON_IsString(terms))
    {
    goto end; //String
    }

    // proxy_settings_entity->policy
    cJSON *policy = cJSON_GetObjectItemCaseSensitive(proxy_settings_entityJSON, "policy");
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


    proxy_settings_entity_local_var = proxy_settings_entity_create (
        strdup(endpoint->valuestring),
        strdup(port->valuestring),
        strdup(terms->valuestring),
        policyList
        );

    return proxy_settings_entity_local_var;
end:
    return NULL;

}
