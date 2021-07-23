#ifndef time_range_entity_TEST
#define time_range_entity_TEST

// the following is to include only the main from the first c file
#ifndef TEST_MAIN
#define TEST_MAIN
#define time_range_entity_MAIN
#endif // TEST_MAIN

#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include "../external/cJSON.h"

#include "../model/time_range_entity.h"
time_range_entity_t* instantiate_time_range_entity(int include_optional);



time_range_entity_t* instantiate_time_range_entity(int include_optional) {
  time_range_entity_t* time_range_entity = NULL;
  if (include_optional) {
    time_range_entity = time_range_entity_create(
      "2013-10-20T19:20:30+01:00",
      "2013-10-20T19:20:30+01:00"
    );
  } else {
    time_range_entity = time_range_entity_create(
      "2013-10-20T19:20:30+01:00",
      "2013-10-20T19:20:30+01:00"
    );
  }

  return time_range_entity;
}


#ifdef time_range_entity_MAIN

void test_time_range_entity(int include_optional) {
    time_range_entity_t* time_range_entity_1 = instantiate_time_range_entity(include_optional);

	cJSON* jsontime_range_entity_1 = time_range_entity_convertToJSON(time_range_entity_1);
	printf("time_range_entity :\n%s\n", cJSON_Print(jsontime_range_entity_1));
	time_range_entity_t* time_range_entity_2 = time_range_entity_parseFromJSON(jsontime_range_entity_1);
	cJSON* jsontime_range_entity_2 = time_range_entity_convertToJSON(time_range_entity_2);
	printf("repeating time_range_entity:\n%s\n", cJSON_Print(jsontime_range_entity_2));
}

int main() {
  test_time_range_entity(1);
  test_time_range_entity(0);

  printf("Hello world \n");
  return 0;
}

#endif // time_range_entity_MAIN
#endif // time_range_entity_TEST
