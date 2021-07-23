QT += network

HEADERS += \
# Models
    $${PWD}/OAICertificatesEntity.h \
    $${PWD}/OAIProxySettingsEntity.h \
    $${PWD}/OAIServiceEntity.h \
    $${PWD}/OAITimeRangeEntity.h \
    $${PWD}/OAIVpnSettingsEntity.h \
# APIs
    $${PWD}/OAIDefaultApi.h \
    $${PWD}/OAIProviderApi.h \
    $${PWD}/OAIServicesApi.h \
# Others
    $${PWD}/OAIHelpers.h \
    $${PWD}/OAIHttpRequest.h \
    $${PWD}/OAIObject.h \
    $${PWD}/OAIEnum.h \
    $${PWD}/OAIHttpFileElement.h \
    $${PWD}/OAIServerConfiguration.h \
    $${PWD}/OAIServerVariable.h

SOURCES += \
# Models
    $${PWD}/OAICertificatesEntity.cpp \
    $${PWD}/OAIProxySettingsEntity.cpp \
    $${PWD}/OAIServiceEntity.cpp \
    $${PWD}/OAITimeRangeEntity.cpp \
    $${PWD}/OAIVpnSettingsEntity.cpp \
# APIs
    $${PWD}/OAIDefaultApi.cpp \
    $${PWD}/OAIProviderApi.cpp \
    $${PWD}/OAIServicesApi.cpp \
# Others
    $${PWD}/OAIHelpers.cpp \
    $${PWD}/OAIHttpRequest.cpp \
    $${PWD}/OAIHttpFileElement.cpp

