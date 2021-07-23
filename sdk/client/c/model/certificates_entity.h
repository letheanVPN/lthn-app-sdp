/*
 * certificates_entity.h
 *
 * 
 */

#ifndef _certificates_entity_H_
#define _certificates_entity_H_

#include <string.h>
#include "../external/cJSON.h"
#include "../include/list.h"
#include "../include/keyValuePair.h"
#include "../include/binary.h"

typedef struct certificates_entity_t certificates_entity_t;




typedef struct certificates_entity_t {
    double id; //numeric

} certificates_entity_t;

certificates_entity_t *certificates_entity_create(
    double id
);

void certificates_entity_free(certificates_entity_t *certificates_entity);

certificates_entity_t *certificates_entity_parseFromJSON(cJSON *certificates_entityJSON);

cJSON *certificates_entity_convertToJSON(certificates_entity_t *certificates_entity);

#endif /* _certificates_entity_H_ */

