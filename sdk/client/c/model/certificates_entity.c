#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include "certificates_entity.h"



certificates_entity_t *certificates_entity_create(
    double id
    ) {
    certificates_entity_t *certificates_entity_local_var = malloc(sizeof(certificates_entity_t));
    if (!certificates_entity_local_var) {
        return NULL;
    }
    certificates_entity_local_var->id = id;

    return certificates_entity_local_var;
}


void certificates_entity_free(certificates_entity_t *certificates_entity) {
    if(NULL == certificates_entity){
        return ;
    }
    listEntry_t *listEntry;
    free(certificates_entity);
}

cJSON *certificates_entity_convertToJSON(certificates_entity_t *certificates_entity) {
    cJSON *item = cJSON_CreateObject();

    // certificates_entity->id
    if (!certificates_entity->id) {
        goto fail;
    }
    
    if(cJSON_AddNumberToObject(item, "id", certificates_entity->id) == NULL) {
    goto fail; //Numeric
    }

    return item;
fail:
    if (item) {
        cJSON_Delete(item);
    }
    return NULL;
}

certificates_entity_t *certificates_entity_parseFromJSON(cJSON *certificates_entityJSON){

    certificates_entity_t *certificates_entity_local_var = NULL;

    // certificates_entity->id
    cJSON *id = cJSON_GetObjectItemCaseSensitive(certificates_entityJSON, "id");
    if (!id) {
        goto end;
    }

    
    if(!cJSON_IsNumber(id))
    {
    goto end; //Numeric
    }


    certificates_entity_local_var = certificates_entity_create (
        id->valuedouble
        );

    return certificates_entity_local_var;
end:
    return NULL;

}
