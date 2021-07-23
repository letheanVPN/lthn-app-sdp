/**
 * Lethean VPM
 * Distributed Virtual Private Marketplace
 *
 * The version of the OpenAPI document: 1
 * Contact: contact@lethean.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

#include <QDebug>
#include <QFile>
#include <QJsonDocument>
#include <QJsonObject>

#include "LTHNHttpFileElement.h"

namespace lthn {
namespace vpm {
namespace client {

void LTHNHttpFileElement::setMimeType(const QString &mime) {
    mime_type = mime;
}

void LTHNHttpFileElement::setFileName(const QString &name) {
    local_filename = name;
}

void LTHNHttpFileElement::setVariableName(const QString &name) {
    variable_name = name;
}

void LTHNHttpFileElement::setRequestFileName(const QString &name) {
    request_filename = name;
}

bool LTHNHttpFileElement::isSet() const {
    return !local_filename.isEmpty() || !request_filename.isEmpty();
}

QString LTHNHttpFileElement::asJson() const {
    QFile file(local_filename);
    QByteArray bArray;
    bool result = false;
    if (file.exists()) {
        result = file.open(QIODevice::ReadOnly);
        bArray = file.readAll();
        file.close();
    }
    if (!result) {
        qDebug() << "Error opening file " << local_filename;
    }
    return QString(bArray);
}

QJsonValue LTHNHttpFileElement::asJsonValue() const {
    QFile file(local_filename);
    QByteArray bArray;
    bool result = false;
    if (file.exists()) {
        result = file.open(QIODevice::ReadOnly);
        bArray = file.readAll();
        file.close();
    }
    if (!result) {
        qDebug() << "Error opening file " << local_filename;
    }
#if QT_VERSION >= QT_VERSION_CHECK(5, 15, 0)
    return QJsonDocument::fromJson(bArray.data()).object();
#else
    return QJsonDocument::fromBinaryData(bArray.data()).object();
#endif
}

bool LTHNHttpFileElement::fromStringValue(const QString &instr) {
    QFile file(local_filename);
    bool result = false;
    if (file.exists()) {
        file.remove();
    }
    result = file.open(QIODevice::WriteOnly);
    file.write(instr.toUtf8());
    file.close();
    if (!result) {
        qDebug() << "Error creating file " << local_filename;
    }
    return result;
}

bool LTHNHttpFileElement::fromJsonValue(const QJsonValue &jval) {
    QFile file(local_filename);
    bool result = false;
    if (file.exists()) {
        file.remove();
    }
    result = file.open(QIODevice::WriteOnly);
#if QT_VERSION >= QT_VERSION_CHECK(5, 15, 0)
    file.write(QJsonDocument(jval.toObject()).toJson());
#else
    file.write(QJsonDocument(jval.toObject()).toBinaryData());
#endif
    file.close();
    if (!result) {
        qDebug() << "Error creating file " << local_filename;
    }
    return result;
}

QByteArray LTHNHttpFileElement::asByteArray() const {
    QFile file(local_filename);
    QByteArray bArray;
    bool result = false;
    if (file.exists()) {
        result = file.open(QIODevice::ReadOnly);
        bArray = file.readAll();
        file.close();
    }
    if (!result) {
        qDebug() << "Error opening file " << local_filename;
    }
    return bArray;
}

bool LTHNHttpFileElement::fromByteArray(const QByteArray &bytes) {
    QFile file(local_filename);
    bool result = false;
    if (file.exists()) {
        file.remove();
    }
    result = file.open(QIODevice::WriteOnly);
    file.write(bytes);
    file.close();
    if (!result) {
        qDebug() << "Error creating file " << local_filename;
    }
    return result;
}

bool LTHNHttpFileElement::saveToFile(const QString &varName, const QString &localFName, const QString &reqFname, const QString &mime, const QByteArray &bytes) {
    setMimeType(mime);
    setFileName(localFName);
    setVariableName(varName);
    setRequestFileName(reqFname);
    return fromByteArray(bytes);
}

QByteArray LTHNHttpFileElement::loadFromFile(const QString &varName, const QString &localFName, const QString &reqFname, const QString &mime) {
    setMimeType(mime);
    setFileName(localFName);
    setVariableName(varName);
    setRequestFileName(reqFname);
    return asByteArray();
}

} // namespace lthn
} // namespace vpm
} // namespace client
