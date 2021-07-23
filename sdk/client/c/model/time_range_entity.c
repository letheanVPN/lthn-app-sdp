#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include "time_range_entity.h"



time_range_entity_t *time_range_entity_create(
    char *from,
    char *to
    ) {
    time_range_entity_t *time_range_entity_local_var = malloc(sizeof(time_range_entity_t));
    if (!time_range_entity_local_var) {
        return NULL;
    }
    time_range_entity_local_var->from = from;
    time_range_entity_local_var->to = to;

    return time_range_entity_local_var;
}


void time_range_entity_free(time_range_entity_t *time_range_entity) {
    if(NULL == time_range_entity){
        return ;
    }
    listEntry_t *listEntry;
    if (time_range_entity->from) {
        free(time_range_entity->from);
        time_range_entity->from = NULL;
    }
    if (time_range_entity->to) {
        free(time_range_entity->to);
        time_range_entity->to = NULL;
    }
    free(time_range_entity);
}

cJSON *time_range_entity_convertToJSON(time_range_entity_t *time_range_entity) {
    cJSON *item = cJSON_CreateObject();

    // time_range_entity->from
    if (!time_range_entity->from) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "from", time_range_entity->from) == NULL) {
    goto fail; //Date-Time
    }


    // time_range_entity->to
    if (!time_range_entity->to) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "to", time_range_entity->to) == NULL) {
    goto fail; //Date-Time
    }

    return item;
fail:
    if (item) {
        cJSON_Delete(item);
    }
    return NULL;
}

time_range_entity_t *time_range_entity_parseFromJSON(cJSON *time_range_entityJSON){

    time_range_entity_t *time_range_entity_local_var = NULL;

    // time_range_entity->from
    cJSON *from = cJSON_GetObjectItemCaseSensitive(time_range_entityJSON, "from");
    if (!from) {
        goto end;
    }

    
    if(!cJSON_IsString(from))
    {
    goto end; //DateTime
    }

    // time_range_entity->to
    cJSON *to = cJSON_GetObjectItemCaseSensitive(time_range_entityJSON, "to");
    if (!to) {
        goto end;
    }

    
    if(!cJSON_IsString(to))
    {
    goto end; //DateTime
    }


    time_range_entity_local_var = time_range_entity_create (
        strdup(from->valuestring),
        strdup(to->valuestring)
        );

    return time_range_entity_local_var;
end:
    return NULL;

}
