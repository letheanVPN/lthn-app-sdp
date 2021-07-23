#ifndef service_entity_TEST
#define service_entity_TEST

// the following is to include only the main from the first c file
#ifndef TEST_MAIN
#define TEST_MAIN
#define service_entity_MAIN
#endif // TEST_MAIN

#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include "../external/cJSON.h"

#include "../model/service_entity.h"
service_entity_t* instantiate_service_entity(int include_optional);

#include "test_time_range_entity.c"


service_entity_t* instantiate_service_entity(int include_optional) {
  service_entity_t* service_entity = NULL;
  if (include_optional) {
    service_entity = service_entity_create(
      "a",
      "a",
      lethean_vpm_service_entity_TYPE_vpn,
      "a",
      10,
      0,
      10,
      0,
      1,
      0,
      0,
      list_create(),
      list_create(),
       // false, not to have infinite recursion
      instantiate_time_range_entity(0),
      1,
      list_create()
    );
  } else {
    service_entity = service_entity_create(
      "a",
      "a",
      lethean_vpm_service_entity_TYPE_vpn,
      "a",
      10,
      0,
      10,
      0,
      1,
      0,
      0,
      list_create(),
      list_create(),
      NULL,
      1,
      list_create()
    );
  }

  return service_entity;
}


#ifdef service_entity_MAIN

void test_service_entity(int include_optional) {
    service_entity_t* service_entity_1 = instantiate_service_entity(include_optional);

	cJSON* jsonservice_entity_1 = service_entity_convertToJSON(service_entity_1);
	printf("service_entity :\n%s\n", cJSON_Print(jsonservice_entity_1));
	service_entity_t* service_entity_2 = service_entity_parseFromJSON(jsonservice_entity_1);
	cJSON* jsonservice_entity_2 = service_entity_convertToJSON(service_entity_2);
	printf("repeating service_entity:\n%s\n", cJSON_Print(jsonservice_entity_2));
}

int main() {
  test_service_entity(1);
  test_service_entity(0);

  printf("Hello world \n");
  return 0;
}

#endif // service_entity_MAIN
#endif // service_entity_TEST
