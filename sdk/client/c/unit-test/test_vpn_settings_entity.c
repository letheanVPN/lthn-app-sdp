#ifndef vpn_settings_entity_TEST
#define vpn_settings_entity_TEST

// the following is to include only the main from the first c file
#ifndef TEST_MAIN
#define TEST_MAIN
#define vpn_settings_entity_MAIN
#endif // TEST_MAIN

#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include "../external/cJSON.h"

#include "../model/vpn_settings_entity.h"
vpn_settings_entity_t* instantiate_vpn_settings_entity(int include_optional);



vpn_settings_entity_t* instantiate_vpn_settings_entity(int include_optional) {
  vpn_settings_entity_t* vpn_settings_entity = NULL;
  if (include_optional) {
    vpn_settings_entity = vpn_settings_entity_create(
      "a",
      "a",
      "0",
      "a",
      list_create()
    );
  } else {
    vpn_settings_entity = vpn_settings_entity_create(
      "a",
      "a",
      "0",
      "a",
      list_create()
    );
  }

  return vpn_settings_entity;
}


#ifdef vpn_settings_entity_MAIN

void test_vpn_settings_entity(int include_optional) {
    vpn_settings_entity_t* vpn_settings_entity_1 = instantiate_vpn_settings_entity(include_optional);

	cJSON* jsonvpn_settings_entity_1 = vpn_settings_entity_convertToJSON(vpn_settings_entity_1);
	printf("vpn_settings_entity :\n%s\n", cJSON_Print(jsonvpn_settings_entity_1));
	vpn_settings_entity_t* vpn_settings_entity_2 = vpn_settings_entity_parseFromJSON(jsonvpn_settings_entity_1);
	cJSON* jsonvpn_settings_entity_2 = vpn_settings_entity_convertToJSON(vpn_settings_entity_2);
	printf("repeating vpn_settings_entity:\n%s\n", cJSON_Print(jsonvpn_settings_entity_2));
}

int main() {
  test_vpn_settings_entity(1);
  test_vpn_settings_entity(0);

  printf("Hello world \n");
  return 0;
}

#endif // vpn_settings_entity_MAIN
#endif // vpn_settings_entity_TEST
