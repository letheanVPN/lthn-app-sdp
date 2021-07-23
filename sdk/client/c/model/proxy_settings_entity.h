/*
 * proxy_settings_entity.h
 *
 * 
 */

#ifndef _proxy_settings_entity_H_
#define _proxy_settings_entity_H_

#include <string.h>
#include "../external/cJSON.h"
#include "../include/list.h"
#include "../include/keyValuePair.h"
#include "../include/binary.h"

typedef struct proxy_settings_entity_t proxy_settings_entity_t;




typedef struct proxy_settings_entity_t {
    char *endpoint; // string
    char *port; // string
    char *terms; // string
    list_t *policy; //primitive container

} proxy_settings_entity_t;

proxy_settings_entity_t *proxy_settings_entity_create(
    char *endpoint,
    char *port,
    char *terms,
    list_t *policy
);

void proxy_settings_entity_free(proxy_settings_entity_t *proxy_settings_entity);

proxy_settings_entity_t *proxy_settings_entity_parseFromJSON(cJSON *proxy_settings_entityJSON);

cJSON *proxy_settings_entity_convertToJSON(proxy_settings_entity_t *proxy_settings_entity);

#endif /* _proxy_settings_entity_H_ */

