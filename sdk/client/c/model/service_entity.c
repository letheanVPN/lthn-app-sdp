#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include "service_entity.h"


char* typeservice_entity_ToString(lethean_vpm_service_entity_TYPE_e type) {
    char* typeArray[] =  { "NULL", "vpn", "proxy" };
	return typeArray[type];
}

lethean_vpm_service_entity_TYPE_e typeservice_entity_FromString(char* type){
    int stringToReturn = 0;
    char *typeArray[] =  { "NULL", "vpn", "proxy" };
    size_t sizeofArray = sizeof(typeArray) / sizeof(typeArray[0]);
    while(stringToReturn < sizeofArray) {
        if(strcmp(type, typeArray[stringToReturn]) == 0) {
            return stringToReturn;
        }
        stringToReturn++;
    }
    return 0;
}

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
    ) {
    service_entity_t *service_entity_local_var = malloc(sizeof(service_entity_t));
    if (!service_entity_local_var) {
        return NULL;
    }
    service_entity_local_var->id = id;
    service_entity_local_var->name = name;
    service_entity_local_var->type = type;
    service_entity_local_var->cost = cost;
    service_entity_local_var->first_pre_paid_minutes = first_pre_paid_minutes;
    service_entity_local_var->first_verifications_needed = first_verifications_needed;
    service_entity_local_var->subsequent_pre_paid_minutes = subsequent_pre_paid_minutes;
    service_entity_local_var->subsequent_verifications_needed = subsequent_verifications_needed;
    service_entity_local_var->allow_refunds = allow_refunds;
    service_entity_local_var->download_speed = download_speed;
    service_entity_local_var->upload_speed = upload_speed;
    service_entity_local_var->proxy = proxy;
    service_entity_local_var->vpn = vpn;
    service_entity_local_var->validity = validity;
    service_entity_local_var->disable = disable;
    service_entity_local_var->certificates = certificates;

    return service_entity_local_var;
}


void service_entity_free(service_entity_t *service_entity) {
    if(NULL == service_entity){
        return ;
    }
    listEntry_t *listEntry;
    if (service_entity->id) {
        free(service_entity->id);
        service_entity->id = NULL;
    }
    if (service_entity->name) {
        free(service_entity->name);
        service_entity->name = NULL;
    }
    if (service_entity->cost) {
        free(service_entity->cost);
        service_entity->cost = NULL;
    }
    if (service_entity->proxy) {
        list_ForEach(listEntry, service_entity->proxy) {
            proxy_settings_entity_free(listEntry->data);
        }
        list_free(service_entity->proxy);
        service_entity->proxy = NULL;
    }
    if (service_entity->vpn) {
        list_ForEach(listEntry, service_entity->vpn) {
            vpn_settings_entity_free(listEntry->data);
        }
        list_free(service_entity->vpn);
        service_entity->vpn = NULL;
    }
    if (service_entity->validity) {
        time_range_entity_free(service_entity->validity);
        service_entity->validity = NULL;
    }
    if (service_entity->certificates) {
        list_ForEach(listEntry, service_entity->certificates) {
            certificates_entity_free(listEntry->data);
        }
        list_free(service_entity->certificates);
        service_entity->certificates = NULL;
    }
    free(service_entity);
}

cJSON *service_entity_convertToJSON(service_entity_t *service_entity) {
    cJSON *item = cJSON_CreateObject();

    // service_entity->id
    if(service_entity->id) { 
    if(cJSON_AddStringToObject(item, "id", service_entity->id) == NULL) {
    goto fail; //String
    }
     } 


    // service_entity->name
    if (!service_entity->name) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "name", service_entity->name) == NULL) {
    goto fail; //String
    }


    // service_entity->type
    
    if(cJSON_AddStringToObject(item, "type", typeservice_entity_ToString(service_entity->type)) == NULL)
    {
    goto fail; //Enum
    }


    // service_entity->cost
    if (!service_entity->cost) {
        goto fail;
    }
    
    if(cJSON_AddStringToObject(item, "cost", service_entity->cost) == NULL) {
    goto fail; //String
    }


    // service_entity->first_pre_paid_minutes
    if(service_entity->first_pre_paid_minutes) { 
    if(cJSON_AddNumberToObject(item, "firstPrePaidMinutes", service_entity->first_pre_paid_minutes) == NULL) {
    goto fail; //Numeric
    }
     } 


    // service_entity->first_verifications_needed
    if(service_entity->first_verifications_needed) { 
    if(cJSON_AddNumberToObject(item, "firstVerificationsNeeded", service_entity->first_verifications_needed) == NULL) {
    goto fail; //Numeric
    }
     } 


    // service_entity->subsequent_pre_paid_minutes
    if(service_entity->subsequent_pre_paid_minutes) { 
    if(cJSON_AddNumberToObject(item, "subsequentPrePaidMinutes", service_entity->subsequent_pre_paid_minutes) == NULL) {
    goto fail; //Numeric
    }
     } 


    // service_entity->subsequent_verifications_needed
    if(service_entity->subsequent_verifications_needed) { 
    if(cJSON_AddNumberToObject(item, "subsequentVerificationsNeeded", service_entity->subsequent_verifications_needed) == NULL) {
    goto fail; //Numeric
    }
     } 


    // service_entity->allow_refunds
    if(service_entity->allow_refunds) { 
    if(cJSON_AddBoolToObject(item, "allowRefunds", service_entity->allow_refunds) == NULL) {
    goto fail; //Bool
    }
     } 


    // service_entity->download_speed
    if (!service_entity->download_speed) {
        goto fail;
    }
    
    if(cJSON_AddNumberToObject(item, "downloadSpeed", service_entity->download_speed) == NULL) {
    goto fail; //Numeric
    }


    // service_entity->upload_speed
    if (!service_entity->upload_speed) {
        goto fail;
    }
    
    if(cJSON_AddNumberToObject(item, "uploadSpeed", service_entity->upload_speed) == NULL) {
    goto fail; //Numeric
    }


    // service_entity->proxy
    if(service_entity->proxy) { 
    cJSON *proxy = cJSON_AddArrayToObject(item, "proxy");
    if(proxy == NULL) {
    goto fail; //nonprimitive container
    }

    listEntry_t *proxyListEntry;
    if (service_entity->proxy) {
    list_ForEach(proxyListEntry, service_entity->proxy) {
    cJSON *itemLocal = proxy_settings_entity_convertToJSON(proxyListEntry->data);
    if(itemLocal == NULL) {
    goto fail;
    }
    cJSON_AddItemToArray(proxy, itemLocal);
    }
    }
     } 


    // service_entity->vpn
    if(service_entity->vpn) { 
    cJSON *vpn = cJSON_AddArrayToObject(item, "vpn");
    if(vpn == NULL) {
    goto fail; //nonprimitive container
    }

    listEntry_t *vpnListEntry;
    if (service_entity->vpn) {
    list_ForEach(vpnListEntry, service_entity->vpn) {
    cJSON *itemLocal = vpn_settings_entity_convertToJSON(vpnListEntry->data);
    if(itemLocal == NULL) {
    goto fail;
    }
    cJSON_AddItemToArray(vpn, itemLocal);
    }
    }
     } 


    // service_entity->validity
    if(service_entity->validity) { 
    cJSON *validity_local_JSON = time_range_entity_convertToJSON(service_entity->validity);
    if(validity_local_JSON == NULL) {
    goto fail; //model
    }
    cJSON_AddItemToObject(item, "validity", validity_local_JSON);
    if(item->child == NULL) {
    goto fail;
    }
     } 


    // service_entity->disable
    if (!service_entity->disable) {
        goto fail;
    }
    
    if(cJSON_AddBoolToObject(item, "disable", service_entity->disable) == NULL) {
    goto fail; //Bool
    }


    // service_entity->certificates
    if(service_entity->certificates) { 
    cJSON *certificates = cJSON_AddArrayToObject(item, "certificates");
    if(certificates == NULL) {
    goto fail; //nonprimitive container
    }

    listEntry_t *certificatesListEntry;
    if (service_entity->certificates) {
    list_ForEach(certificatesListEntry, service_entity->certificates) {
    cJSON *itemLocal = certificates_entity_convertToJSON(certificatesListEntry->data);
    if(itemLocal == NULL) {
    goto fail;
    }
    cJSON_AddItemToArray(certificates, itemLocal);
    }
    }
     } 

    return item;
fail:
    if (item) {
        cJSON_Delete(item);
    }
    return NULL;
}

service_entity_t *service_entity_parseFromJSON(cJSON *service_entityJSON){

    service_entity_t *service_entity_local_var = NULL;

    // service_entity->id
    cJSON *id = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "id");
    if (id) { 
    if(!cJSON_IsString(id))
    {
    goto end; //String
    }
    }

    // service_entity->name
    cJSON *name = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "name");
    if (!name) {
        goto end;
    }

    
    if(!cJSON_IsString(name))
    {
    goto end; //String
    }

    // service_entity->type
    cJSON *type = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "type");
    if (!type) {
        goto end;
    }

    lethean_vpm_service_entity_TYPE_e typeVariable;
    
    if(!cJSON_IsString(type))
    {
    goto end; //Enum
    }
    typeVariable = typeservice_entity_FromString(type->valuestring);

    // service_entity->cost
    cJSON *cost = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "cost");
    if (!cost) {
        goto end;
    }

    
    if(!cJSON_IsString(cost))
    {
    goto end; //String
    }

    // service_entity->first_pre_paid_minutes
    cJSON *first_pre_paid_minutes = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "firstPrePaidMinutes");
    if (first_pre_paid_minutes) { 
    if(!cJSON_IsNumber(first_pre_paid_minutes))
    {
    goto end; //Numeric
    }
    }

    // service_entity->first_verifications_needed
    cJSON *first_verifications_needed = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "firstVerificationsNeeded");
    if (first_verifications_needed) { 
    if(!cJSON_IsNumber(first_verifications_needed))
    {
    goto end; //Numeric
    }
    }

    // service_entity->subsequent_pre_paid_minutes
    cJSON *subsequent_pre_paid_minutes = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "subsequentPrePaidMinutes");
    if (subsequent_pre_paid_minutes) { 
    if(!cJSON_IsNumber(subsequent_pre_paid_minutes))
    {
    goto end; //Numeric
    }
    }

    // service_entity->subsequent_verifications_needed
    cJSON *subsequent_verifications_needed = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "subsequentVerificationsNeeded");
    if (subsequent_verifications_needed) { 
    if(!cJSON_IsNumber(subsequent_verifications_needed))
    {
    goto end; //Numeric
    }
    }

    // service_entity->allow_refunds
    cJSON *allow_refunds = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "allowRefunds");
    if (allow_refunds) { 
    if(!cJSON_IsBool(allow_refunds))
    {
    goto end; //Bool
    }
    }

    // service_entity->download_speed
    cJSON *download_speed = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "downloadSpeed");
    if (!download_speed) {
        goto end;
    }

    
    if(!cJSON_IsNumber(download_speed))
    {
    goto end; //Numeric
    }

    // service_entity->upload_speed
    cJSON *upload_speed = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "uploadSpeed");
    if (!upload_speed) {
        goto end;
    }

    
    if(!cJSON_IsNumber(upload_speed))
    {
    goto end; //Numeric
    }

    // service_entity->proxy
    cJSON *proxy = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "proxy");
    list_t *proxyList;
    if (proxy) { 
    cJSON *proxy_local_nonprimitive;
    if(!cJSON_IsArray(proxy)){
        goto end; //nonprimitive container
    }

    proxyList = list_create();

    cJSON_ArrayForEach(proxy_local_nonprimitive,proxy )
    {
        if(!cJSON_IsObject(proxy_local_nonprimitive)){
            goto end;
        }
        proxy_settings_entity_t *proxyItem = proxy_settings_entity_parseFromJSON(proxy_local_nonprimitive);

        list_addElement(proxyList, proxyItem);
    }
    }

    // service_entity->vpn
    cJSON *vpn = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "vpn");
    list_t *vpnList;
    if (vpn) { 
    cJSON *vpn_local_nonprimitive;
    if(!cJSON_IsArray(vpn)){
        goto end; //nonprimitive container
    }

    vpnList = list_create();

    cJSON_ArrayForEach(vpn_local_nonprimitive,vpn )
    {
        if(!cJSON_IsObject(vpn_local_nonprimitive)){
            goto end;
        }
        vpn_settings_entity_t *vpnItem = vpn_settings_entity_parseFromJSON(vpn_local_nonprimitive);

        list_addElement(vpnList, vpnItem);
    }
    }

    // service_entity->validity
    cJSON *validity = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "validity");
    time_range_entity_t *validity_local_nonprim = NULL;
    if (validity) { 
    validity_local_nonprim = time_range_entity_parseFromJSON(validity); //nonprimitive
    }

    // service_entity->disable
    cJSON *disable = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "disable");
    if (!disable) {
        goto end;
    }

    
    if(!cJSON_IsBool(disable))
    {
    goto end; //Bool
    }

    // service_entity->certificates
    cJSON *certificates = cJSON_GetObjectItemCaseSensitive(service_entityJSON, "certificates");
    list_t *certificatesList;
    if (certificates) { 
    cJSON *certificates_local_nonprimitive;
    if(!cJSON_IsArray(certificates)){
        goto end; //nonprimitive container
    }

    certificatesList = list_create();

    cJSON_ArrayForEach(certificates_local_nonprimitive,certificates )
    {
        if(!cJSON_IsObject(certificates_local_nonprimitive)){
            goto end;
        }
        certificates_entity_t *certificatesItem = certificates_entity_parseFromJSON(certificates_local_nonprimitive);

        list_addElement(certificatesList, certificatesItem);
    }
    }


    service_entity_local_var = service_entity_create (
        id ? strdup(id->valuestring) : NULL,
        strdup(name->valuestring),
        typeVariable,
        strdup(cost->valuestring),
        first_pre_paid_minutes ? first_pre_paid_minutes->valuedouble : 0,
        first_verifications_needed ? first_verifications_needed->valuedouble : 0,
        subsequent_pre_paid_minutes ? subsequent_pre_paid_minutes->valuedouble : 0,
        subsequent_verifications_needed ? subsequent_verifications_needed->valuedouble : 0,
        allow_refunds ? allow_refunds->valueint : 0,
        download_speed->valuedouble,
        upload_speed->valuedouble,
        proxy ? proxyList : NULL,
        vpn ? vpnList : NULL,
        validity ? validity_local_nonprim : NULL,
        disable->valueint,
        certificates ? certificatesList : NULL
        );

    return service_entity_local_var;
end:
    if (validity_local_nonprim) {
        time_range_entity_free(validity_local_nonprim);
        validity_local_nonprim = NULL;
    }
    return NULL;

}
