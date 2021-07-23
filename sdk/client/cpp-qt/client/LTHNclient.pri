QT += network

HEADERS += \
# Models
    $${PWD}/LTHNCertificatesEntity.h \
    $${PWD}/LTHNProxySettingsEntity.h \
    $${PWD}/LTHNServiceEntity.h \
    $${PWD}/LTHNTimeRangeEntity.h \
    $${PWD}/LTHNVpnSettingsEntity.h \
# APIs
    $${PWD}/LTHNDefaultApi.h \
    $${PWD}/LTHNProviderApi.h \
    $${PWD}/LTHNServicesApi.h \
# Others
    $${PWD}/LTHNHelpers.h \
    $${PWD}/LTHNHttpRequest.h \
    $${PWD}/LTHNObject.h \
    $${PWD}/LTHNEnum.h \
    $${PWD}/LTHNHttpFileElement.h \
    $${PWD}/LTHNServerConfiguration.h \
    $${PWD}/LTHNServerVariable.h

SOURCES += \
# Models
    $${PWD}/LTHNCertificatesEntity.cpp \
    $${PWD}/LTHNProxySettingsEntity.cpp \
    $${PWD}/LTHNServiceEntity.cpp \
    $${PWD}/LTHNTimeRangeEntity.cpp \
    $${PWD}/LTHNVpnSettingsEntity.cpp \
# APIs
    $${PWD}/LTHNDefaultApi.cpp \
    $${PWD}/LTHNProviderApi.cpp \
    $${PWD}/LTHNServicesApi.cpp \
# Others
    $${PWD}/LTHNHelpers.cpp \
    $${PWD}/LTHNHttpRequest.cpp \
    $${PWD}/LTHNHttpFileElement.cpp

