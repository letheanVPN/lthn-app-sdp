/*
 * service_entity.h
 *
 * 
 */

#ifndef _service_entity_H_
#define _service_entity_H_

#include <string.h>
#include "../external/cJSON.h"
#include "../include/list.h"
#include "../include/keyValuePair.h"
#include "../include/binary.h"

typedef struct service_entity_t service_entity_t;

#include "certificates_entity.h"
#include "proxy_settings_entity.h"
#include "time_range_entity.h"
#include "vpn_settings_entity.h"

// Enum TYPE for service_entity

typedef enum  { lethean_vpm_service_entity_TYPE_NULL = 0, lethean_vpm_service_entity_TYPE_vpn, lethean_vpm_service_entity_TYPE_proxy } lethean_vpm_service_entity_TYPE_e;

char* service_entity_type_ToString(lethean_vpm_service_entity_TYPE_e type);

lethean_vpm_service_entity_TYPE_e service_entity_type_FromString(char* type);



typedef struct service_entity_t {
    char *id; // string
    char *name; // string
    lethean_vpm_service_entity_TYPE_e type; //enum
    char *cost; // string
    double first_pre_paid_minutes; //numeric
    double first_verifications_needed; //numeric
    double subsequent_pre_paid_minutes; //numeric
    double subsequent_verifications_needed; //numeric
    int allow_refunds; //boolean
    double download_speed; //numeric
    double upload_speed; //numeric
    list_t *proxy; //nonprimitive container
    list_t *vpn; //nonprimitive container
    struct time_range_entity_t *validity; //model
    int disable; //boolean
    list_t *certificates; //nonprimitive container

} service_entity_t;

service_entity_t *service_entity_create(
    char *id,
    char *name,
    lethean_vpm_service_entity_TYPE_e type,
    char *cost,
    double first_pre_paid_minutes,
    double first_verifications_needed,
    double subsequent_pre_paid_minutes,
    double subsequent_verifications_needed,
    int allow_refunds,
    double download_speed,
    double upload_speed,
    list_t *proxy,
    list_t *vpn,
    time_range_entity_t *validity,
    int disable,
    list_t *certificates
);

void service_entity_free(service_entity_t *service_entity);

service_entity_t *service_entity_parseFromJSON(cJSON *service_entityJSON);

cJSON *service_entity_convertToJSON(service_entity_t *service_entity);

#endif /* _service_entity_H_ */

