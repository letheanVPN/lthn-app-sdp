#ifndef certificates_entity_TEST
#define certificates_entity_TEST

// the following is to include only the main from the first c file
#ifndef TEST_MAIN
#define TEST_MAIN
#define certificates_entity_MAIN
#endif // TEST_MAIN

#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include "../external/cJSON.h"

#include "../model/certificates_entity.h"
certificates_entity_t* instantiate_certificates_entity(int include_optional);



certificates_entity_t* instantiate_certificates_entity(int include_optional) {
  certificates_entity_t* certificates_entity = NULL;
  if (include_optional) {
    certificates_entity = certificates_entity_create(
      1.337
    );
  } else {
    certificates_entity = certificates_entity_create(
      1.337
    );
  }

  return certificates_entity;
}


#ifdef certificates_entity_MAIN

void test_certificates_entity(int include_optional) {
    certificates_entity_t* certificates_entity_1 = instantiate_certificates_entity(include_optional);

	cJSON* jsoncertificates_entity_1 = certificates_entity_convertToJSON(certificates_entity_1);
	printf("certificates_entity :\n%s\n", cJSON_Print(jsoncertificates_entity_1));
	certificates_entity_t* certificates_entity_2 = certificates_entity_parseFromJSON(jsoncertificates_entity_1);
	cJSON* jsoncertificates_entity_2 = certificates_entity_convertToJSON(certificates_entity_2);
	printf("repeating certificates_entity:\n%s\n", cJSON_Print(jsoncertificates_entity_2));
}

int main() {
  test_certificates_entity(1);
  test_certificates_entity(0);

  printf("Hello world \n");
  return 0;
}

#endif // certificates_entity_MAIN
#endif // certificates_entity_TEST
