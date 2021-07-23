/*
 * vpn_settings_entity.h
 *
 * 
 */

#ifndef _vpn_settings_entity_H_
#define _vpn_settings_entity_H_

#include <string.h>
#include "../external/cJSON.h"
#include "../include/list.h"
#include "../include/keyValuePair.h"
#include "../include/binary.h"

typedef struct vpn_settings_entity_t vpn_settings_entity_t;




typedef struct vpn_settings_entity_t {
    char *endpoint; // string
    char *port; // string
    char *parameters; // string
    char *terms; // string
    list_t *policy; //primitive container

} vpn_settings_entity_t;

vpn_settings_entity_t *vpn_settings_entity_create(
    char *endpoint,
    char *port,
    char *parameters,
    char *terms,
    list_t *policy
);

void vpn_settings_entity_free(vpn_settings_entity_t *vpn_settings_entity);

vpn_settings_entity_t *vpn_settings_entity_parseFromJSON(cJSON *vpn_settings_entityJSON);

cJSON *vpn_settings_entity_convertToJSON(vpn_settings_entity_t *vpn_settings_entity);

#endif /* _vpn_settings_entity_H_ */

