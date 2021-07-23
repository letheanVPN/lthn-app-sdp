/*
 * time_range_entity.h
 *
 * 
 */

#ifndef _time_range_entity_H_
#define _time_range_entity_H_

#include <string.h>
#include "../external/cJSON.h"
#include "../include/list.h"
#include "../include/keyValuePair.h"
#include "../include/binary.h"

typedef struct time_range_entity_t time_range_entity_t;




typedef struct time_range_entity_t {
    char *from; //date time
    char *to; //date time

} time_range_entity_t;

time_range_entity_t *time_range_entity_create(
    char *from,
    char *to
);

void time_range_entity_free(time_range_entity_t *time_range_entity);

time_range_entity_t *time_range_entity_parseFromJSON(cJSON *time_range_entityJSON);

cJSON *time_range_entity_convertToJSON(time_range_entity_t *time_range_entity);

#endif /* _time_range_entity_H_ */

