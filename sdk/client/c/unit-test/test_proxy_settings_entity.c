#ifndef proxy_settings_entity_TEST
#define proxy_settings_entity_TEST

// the following is to include only the main from the first c file
#ifndef TEST_MAIN
#define TEST_MAIN
#define proxy_settings_entity_MAIN
#endif // TEST_MAIN

#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include "../external/cJSON.h"

#include "../model/proxy_settings_entity.h"
proxy_settings_entity_t* instantiate_proxy_settings_entity(int include_optional);



proxy_settings_entity_t* instantiate_proxy_settings_entity(int include_optional) {
  proxy_settings_entity_t* proxy_settings_entity = NULL;
  if (include_optional) {
    proxy_settings_entity = proxy_settings_entity_create(
      "a",
      "a",
      "a",
      list_create()
    );
  } else {
    proxy_settings_entity = proxy_settings_entity_create(
      "a",
      "a",
      "a",
      list_create()
    );
  }

  return proxy_settings_entity;
}


#ifdef proxy_settings_entity_MAIN

void test_proxy_settings_entity(int include_optional) {
    proxy_settings_entity_t* proxy_settings_entity_1 = instantiate_proxy_settings_entity(include_optional);

	cJSON* jsonproxy_settings_entity_1 = proxy_settings_entity_convertToJSON(proxy_settings_entity_1);
	printf("proxy_settings_entity :\n%s\n", cJSON_Print(jsonproxy_settings_entity_1));
	proxy_settings_entity_t* proxy_settings_entity_2 = proxy_settings_entity_parseFromJSON(jsonproxy_settings_entity_1);
	cJSON* jsonproxy_settings_entity_2 = proxy_settings_entity_convertToJSON(proxy_settings_entity_2);
	printf("repeating proxy_settings_entity:\n%s\n", cJSON_Print(jsonproxy_settings_entity_2));
}

int main() {
  test_proxy_settings_entity(1);
  test_proxy_settings_entity(0);

  printf("Hello world \n");
  return 0;
}

#endif // proxy_settings_entity_MAIN
#endif // proxy_settings_entity_TEST
