const AWS = require('aws-sdk');
const PROVIDERS_TABLE = process.env.PROVIDERS_TABLE;
const SERVICES_TABLE = process.env.SERVICES_TABLE;
const SERVICES_HISTORY_TABLE = process.env.SERVICES_HISTORY_TABLE;
// Check offline dynamo BD
const IS_OFFLINE = process.env.IS_OFFLINE;
var SHA256 = require("crypto-js/sha256");
var EdDSA = require('elliptic').eddsa;
var ec = new EdDSA('ed25519');
var utf8 = require('utf8');
var URLSafeBase64 = require('urlsafe-base64');
var datetime = require('node-datetime');
var dt = datetime.create();
var formatted = dt.format('m/d/Y H:M:S');
const uuidv1 = require('uuid/v1');
const DYNAMODB_URI = process.env.DYNAMODB_URI;
let dynamoDb;

// create DB
if (IS_OFFLINE === 'true'){
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost', endpoint: DYNAMODB_URI
  });
}else{
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}

const Services = require('../../models/services')
const Provider = require('../../models/provider')
const Protocol = require('../../models/protocol')


// Require controller modules.
var servicesMiddlewareController = require('../../middleware/services');
var providerMiddlewareController = require('../../middleware/provider');
var hashGetController = require('../hash/get')


// Create User endpoint
/*

use dev
curl -i -H "Content-Type: application/json" -X POST -d '{"protocolVersion": 2, "provider":{"id": "ea29a26650fcc58f5106f46892568c9bea29a26650fcc58f5106f46892568c9b","nodeType": "residential","name": "Laion Camargo","certificates": ["TGFpb24gUm9kcmlndWVzIGRlIENhbWFyZ28gZXN0ZSBlIG1ldSB0ZXN0ZSBkZSBiYXNlIDY0IHBhcmEgbWluaGEgYXBwbGljYXRpb24gSVROUw=="],"wallet": "iz5RCx5nsRAdvpfGnTjqB4Q8rv5zKkvJS1skjD6m7w2pdGbSX44QsETVK6Gcrgz6U99Ar4o3a8SMFQPzzC7tJ64H1bZcfgYAJ","terms": "my term text"}, "services":[{"id": "2C", "name": "Laion Camargo","type":"proxy","cost": 99999999,"firstPrePaidMinutes": 5,"firstVerificationsNeeded": 2,"subsequentPrePaidMinutes": 2,"subsequentVerificationsNeeded": 0,"allowRefunds": true,"downloadSpeed": 1000000,"uploadSpeed": 1000000,"proxy": [],"vpn":[], "validity":{"from":"2018-05-11T13:13:13Z", "to":"2018-06-11T14:14:14Z"}, "disable": false}, {"id": "3C", "protocolVersion": 1, "name": "Laion Camargo","type":"proxy","cost": 99999999,"firstPrePaidMinutes": 5,"firstVerificationsNeeded": 2,"subsequentPrePaidMinutes": 2,"subsequentVerificationsNeeded": 0,"allowRefunds": true,"downloadSpeed": 1000000,"uploadSpeed": 1000000,"proxy": [],"vpn":[], "validity":{"from":"2018-05-11T13:13:13Z", "to":"2018-06-11T14:14:14Z"}, "disable": "teste"}]}' http://localhost:3000/v1/services/add

use prod
curl -i -H "Content-Type: application/json" -X POST -d '{"protocolVersion": 1, "provider":{"id": "ea29a26650fcc58f5106f46892568c9bea29a26650fcc58f5106f46892568c9b","nodeType": "residential","name": "Intense VPN","certificates": [{"content":"-----BEGIN CERTIFICATE-----MIIFRDCCAyygAwIBAgIJAOfAgLrKYf0YMA0GCSqGSIb3DQEBCwUAMC8xCzAJBgNVBAYTAkNaMSAwHgYDVQQDDBdtb25pdG9yLmludGVuc2Vjb2luLmNvbTAeFw0xODA2MDgyMDA1NTlaFw0zODA2MDMyMDA1NTlaMC8xCzAJBgNVBAYTAkNaMSAwHgYDVQQDDBdtb25pdG9yLmludGVuc2Vjb2luLmNvbTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAN9eTjnwzeHcS0s5PhaYu54XfuMDwaP8Yz7vUP24QCxbIbt46ApOTP+4bKXgCuTA1tmNwikt6pKo63PDPhb5ka2bOe0T/qV8LVmXw3guixASE8wmy78ldvMHOQ+LCOjeq0ORrKv3O+6It3MF+Rk7lb9NWXTDA5TsLMYErf4VHNoF4ViQDooM15JAFyFrHF1pG/7VSWcopc8CAR1qp9BDr0fOj1gETfZ0g65K8/CjU0KQXh1/8WSRxSPj6jREbmweIrLV5TPtncff4SKORQL1aV3GCBvt3QwF6hyt8aBRfH5l2ycp1drowc3J36Yh/O38d9lS/ySAya3m0ynguivX2hdKBpdakWjCYxy6ZD1waGPG7oYAYchdONIbbL0//3bBIRJwKe0y01BvAwyKPsXJKAz8NPyVv3FCWgQXmyH2E2AC5/GIDdbECgpKdqQkujr8A4F6lwdKryeE08O6UdxFI6zMaFsTLGQ/3TNcJtXO3TO9vhKDJSirjTqyQRGggWktWcOYS6ZNFDGhjJ1IhdvrFm+vi8T/0vXmZy9yMQZb+MTH4o6UQo9edJPhcApeeILp4jy2imnZeW1e6cbq3V1ayqm5gxl0xk4jmlsCu5cwx+NCJJ67SCtDEUvIfKAfAmNf1r7QRyJ8U+LTw8NaQpbNM8sXKdZol7a/E6OvVTAhSIA5AgMBAAGjYzBhMB0GA1UdDgQWBBSYwdLZXz1UPPS5kKEHBeH01CSu5jAfBgNVHSMEGDAWgBSYwdLZXz1UPPS5kKEHBeH01CSu5jAPBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBhjANBgkqhkiG9w0BAQsFAAOCAgEAwYpNoww/hkg8EILyCpo4RFDGYkrWVxOW5DvC9/nqftlSvYMdTD53Ep3FiQYZYafXTwYTUqSwnJIKG52Hf5TiRxFKH3OwWoN2IEPOZWz8MMHu9Lc59LfZAbLS272Vgl6lnRy1O0Pv+5Iz37mayNLTj7K2YsXCnkvIvnKb0wMyYrnTuggIeUSwJ5oC8rcoCJLrLN4BCx4lf70WCAy+ht4bX1pLyRn2HOiTpHGQWj+oECpz6BpLGGbON1QizqDESeajhTX71Ngmj11K+0PszzR3+uBBhgsplvB9o4z+CyXokTzGtcExst84hch+yULTRmye23UlWd533UkXHdgwLtkGjxaLcE7TD+KWO0oebrPHc7Ry+YtLpR5CIGjrwAku1V0xhEStOoE9022nX/n2HC0SVwbnrHFImujajO2oYVVc4ac3HhFdv6jeJxrDF0adxA2yvXUoarFIWzUtoZ6/LdG+rIxejuMFuEShmy7rphKom+Y5qEyORiczRzd2ehX0KXs2loOstM1Iquz3MCJ47V1D5IVYSyKUvD/fU6vTxndzPPpsx5omTS9XrVRUioYNvyUrJCLc7ITGVP1fQGAxNUJiaH3jQmoXquqO8DnUGxG/XqgUHVOTXkEj2nw5NozXmHvW+YcLPKoWc83RlR+poi4DD/opWM1OIseLHsx/u+Otq5k=-----END CERTIFICATE-----", "id":0, "cn":"Intense Coin"}],"wallet": "iz5RCx5nsRAdvpfGnTjqB4Q8rv5zKkvJS1skjD6m7w2pdGbSX44QsETVK6Gcrgz6U99Ar4o3a8SMFQPzzC7tJ64H1bZcfgYAJ","terms": "my term text"}, "services":[{"id": "2C", "name": "Ultimate Privacy","type":"proxy","cost": "0.00000004","firstPrePaidMinutes": 5,"firstVerificationsNeeded": 2,"subsequentPrePaidMinutes": 2,"subsequentVerificationsNeeded": 0,"allowRefunds": true,"downloadSpeed": 1000000,"uploadSpeed": 1000000,"proxy": [{"endpoint":"127.192.192.1", "port":"443/TCP"}],"vpn":[], "certificates": [{"id":0}], "disable": false}, {"id": "3C", "protocolVersion": 1, "name": "ACME VPN","type":"openvpn","cost": "0.00004414","firstPrePaidMinutes": 5,"firstVerificationsNeeded": 2,"subsequentPrePaidMinutes": 2,"subsequentVerificationsNeeded": 0,"allowRefunds": true,"downloadSpeed": 123123123,"uploadSpeed": 1000000,"proxy": [],"vpn":[{"endpoint":"192.168.1.1", "port":"443/UDP"}], "certificates":[{"id":0}], "disable": false}]}' https://jhx4eq5ijc.execute-api.us-east-1.amazonaws.com/dev/v1/services/add



// valid header, matching body
curl -i -H "Content-Type: application/json" -H "JWS: eyJhbGciOiJFZERTQSJ9.ewogICAicHJvdG9jb2xWZXJzaW9uIjogMSwKICAgInByb3ZpZGVyIjogewogICAgICAiY2VydGlmaWNhdGVzIjogWwogICAgICAgICB7CiAgICAgICAgICAgICJjbiI6ICJpZ25vcmVkIiwKICAgICAgICAgICAgImNvbnRlbnQiOiAiLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tTUlJRkdEQ0NBd0NnQXdJQkFnSUpBUFNTeUNSNFlpZ0tNQTBHQ1NxR1NJYjNEUUVCQ3dVQU1Ca3hGekFWQmdOVkJBTU1Ea2xVVGxORllYTjVSR1Z3Ykc5NU1CNFhEVEU0TURnek1ERTRNVGt3TkZvWERUTTRNRGd5TlRFNE1Ua3dORm93R1RFWE1CVUdBMVVFQXd3T1NWUk9VMFZoYzNsRVpYQnNiM2t3Z2dJaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQ0R3QXdnZ0lLQW9JQ0FRQ3QrL2VQLy85NFZPdHo4WSs5WHQrM1RBRGRselhGV256ZC9YYVNXSksxTnpPRS9XbG5DZTlpWWlxNzhkbjFEQmF2UkhxRkRnbzJlbmlsL2xtY2I4aFZVK1VNTHNRS05aYlJFUXAxc0VoS0JlaFUyK1B0cUVzTnhSNVdSdVNtYzJOUnowZ1doWitNY01SeW5wQTZIcnlYMTVrQWR6LzF3Y2tRSzcwWDhrUndJWUowbFVDNnRpR1ViR0FUSzA4QVFKTU81SVdaTUp6WlhvYkkrcm1yMzAyYS81Y1BHSFhCdXo1WXhhSXFRNEIxeWlwRk1hVFZGeTdCcUQrKzY5YUVrMDJJdTdYb29FaXVjcWg4RkQwTFZmRi9MSzdEZ1BLbEVFVmFXYmtKcUlpSGgrTFdoL0RIL0liQXJjR2o3Sy84WURGVUhpYXVwci9kUXpRRExXcnZocjA2Y0FCRVRFTnNncURUeVZnaldCRTI4aXlDTkZveFQzVENCRkpkTFlHREVXSkdqQkt2dVltZ0xGMGZLM1FkbGZSZ0NDSVdqckFKdzdYajVOZ3VleVhkVXhsdE1uTW9ER0VHeGxOdXFsazlDQlFuTXFJb3lHMDB4c09kdGRkMC9YbmY1dkZQQlI4RXQxRlpQcG0yOGMrYWhLY0VxN3dsbUh3RDNEWUFEeDZTS1FmcW5iVW9WZzdMYkRLcWR4TGhJV3hDMnRObi9JUDBiS2E0RW1lcEhCc0hXMlVhMGtiTlBaRW41dTZRbTNpT3BKbVJYV3VJREd2eHBLckpvSHRXZzFpRTJ6MUdMVG8rb0xUa2orM0ZLMFNnaFM4cVlHUGNRMitPVWhGRk5EWERFRUZiN2FKQit0QTRzSHZqaW0wTW9KZXh2b2FiejY1bkxSUnpNZUdMS1JjWC93SURBUUFCbzJNd1lUQWRCZ05WSFE0RUZnUVVJQkgzTlNBVWRaOG1JQytBNmZ1YUhjUTlOTlV3SHdZRFZSMGpCQmd3Rm9BVUlCSDNOU0FVZFo4bUlDK0E2ZnVhSGNROU5OVXdEd1lEVlIwVEFRSC9CQVV3QXdFQi96QU9CZ05WSFE4QkFmOEVCQU1DQVlZd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dJQkFEVk1Da3ZLQ3N4bXNWcmpiaWttdk5nZ1czWVEyUVBjMTJJeXRxQTJwSVVtcHZSQXE5L2lEdHlyN0hjbUNiRHlHZlFvKzdDUXNJdkdkTklteWFOc0dJcTZzUWZRTkIxbEFqdG84Y1JZWFIrdkw0UGdWNHhlS1RJOXNITndjQzVEV21sUFJUM1BvTW5aeDB4NVNtSTI0aXMxQ0k1NFVidVRrUXVIS1pRR25DTnVrdEg3NjdESVk3MmNUcUFUU0VuRnR2Y2w3alFtSys1WWJUelZxUjg5UitRM1NSenZlakFENWtqdjZneks2cU5hUS9kU1pUNitMb0szNTE4VWhETDU3Z0t2dnRId3pnWTdLUzhUYWo2djB6WVEwTWQrM0dlMWJnSHFaRGdQTjhVSnNncnpNb0VzdDhsRzN5TWJxbmJtOVlDOU5HOWZUQWlBVytObkticDI0SFdpTFlITTVDRjVOU1E2Wk9MRDh5WVE0ekVWRUI3ZmdRSC9kdmU4VjhIRW9UOWNSaDdnMG5CT0puOFU5ZHBSZDVmMUVFeWxjLzdBS2pjTWYrRTNQNVVRWXF5SVhjbGFPbnR3NGMxa0ZBMkQ1d1NaSW4vT1prcmtJTnZ3YURGb3dWRDg4dHA2SnJCWWEzS2M3NHplTGN6Q1NNK0lnRmZkYUtTcExHQ0g1SFZ2aEpueko4MG56Y3dGM1NmWGtKZEVBVnBMSmVRV2x3UzVFdlRpdS8xM0I0dGtjMHFmdWxiSjg5K2UrSEtEalhxbVZUaHdYTUxTd2J2YTg1KzQrNzZWVmtQWjNudG9uSU1JL1ZIOFpINHVCU0FZazhkWTR5U2pkQ0IxZ1p1dFFUNVYyUHo0b0VpV2ZkRVhBQ1RYTXRXVVc5U01QRmJ3a3ZzNjh0MDN2MXk0RXJrMS0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0iLAogICAgICAgICAgICAiaWQiOiAwCiAgICAgICAgIH0KICAgICAgXSwKICAgICAgImlkIjogImU4YWE5MjdmMWVkZDZkNWQ4ZmI0NjE4YzViMjgzMzc4ODA4MDAyNGEyODNhMmZkOWRlMDllNTY4YjE4Y2E0NzciLAogICAgICAibmFtZSI6ICJFWiBQcm92aWRlciIsCiAgICAgICJub2RlVHlwZSI6ICJyZXNpZGVudGlhbCIsCiAgICAgICJ0ZXJtcyI6ICJOb25lIiwKICAgICAgIndhbGxldCI6ICJpejVMY01FUEVtb2VtdXU1NXZaZGQ2aHA5QWtmYTNGTk5ERnV6TlBQTXRXeDN0M1J5dWZucVdWZ2RIYVVONXNTRWllRmdtS3hGckw3VjI0eXR1bnBlNnNlMUNiODdTTExyIgogICB9LAogICAic2VydmljZXMiOiBbCiAgICAgIHsKICAgICAgICAgImFsbG93UmVmdW5kcyI6IGZhbHNlLAogICAgICAgICAiY2VydGlmaWNhdGVzIjogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICJpZCI6IDAKICAgICAgICAgICAgfQogICAgICAgICBdLAogICAgICAgICAiY29zdCI6ICIxLjAwMDAwMDAwIiwKICAgICAgICAgImRpc2FibGUiOiBmYWxzZSwKICAgICAgICAgImRvd25sb2FkU3BlZWQiOiAxMDI0MDAwMCwKICAgICAgICAgImZpcnN0UHJlUGFpZE1pbnV0ZXMiOiAyMCwKICAgICAgICAgImZpcnN0VmVyaWZpY2F0aW9uc05lZWRlZCI6IDAsCiAgICAgICAgICJpZCI6ICIxQSIsCiAgICAgICAgICJuYW1lIjogIlVTRWFzdCIsCiAgICAgICAgICJwcm94eSI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICAiZW5kcG9pbnQiOiAiMTguMjIyLjE3My43MiIsCiAgICAgICAgICAgICAgICJwb3J0IjogIjgwODAvVENQIgogICAgICAgICAgICB9CiAgICAgICAgIF0sCiAgICAgICAgICJzdWJzZXF1ZW50UHJlUGFpZE1pbnV0ZXMiOiAzMCwKICAgICAgICAgInN1YnNlcXVlbnRWZXJpZmljYXRpb25zTmVlZGVkIjogMCwKICAgICAgICAgInR5cGUiOiAicHJveHkiLAogICAgICAgICAidXBsb2FkU3BlZWQiOiAxMDI0MDAwMCwKICAgICAgICAgInZwbiI6IFtdCiAgICAgIH0KICAgXQp9.4e076a50d0b271c15804915bc53a884351cb599d59b4ad09d6f09cf48cfad061a3f0d9ca8d88f2d34ce88bfd00aa551633725d0bb9d32ee0d7a601540bfca101" -X POST -d '{%0"protocolVersion": 1,%0"provider": {%0"certificates": [%0{%0"cn": "ignored",%0"content": "-----BEGIN CERTIFICATE-----MIIFGDCCAwCgAwIBAgIJAPSSyCR4YigKMA0GCSqGSIb3DQEBCwUAMBkxFzAVBgNVBAMMDklUTlNFYXN5RGVwbG95MB4XDTE4MDgzMDE4MTkwNFoXDTM4MDgyNTE4MTkwNFowGTEXMBUGA1UEAwwOSVROU0Vhc3lEZXBsb3kwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCt+/eP//94VOtz8Y+9Xt+3TADdlzXFWnzd/XaSWJK1NzOE/WlnCe9iYiq78dn1DBavRHqFDgo2enil/lmcb8hVU+UMLsQKNZbREQp1sEhKBehU2+PtqEsNxR5WRuSmc2NRz0gWhZ+McMRynpA6HryX15kAdz/1wckQK70X8kRwIYJ0lUC6tiGUbGATK08AQJMO5IWZMJzZXobI+rmr302a/5cPGHXBuz5YxaIqQ4B1yipFMaTVFy7BqD++69aEk02Iu7XooEiucqh8FD0LVfF/LK7DgPKlEEVaWbkJqIiHh+LWh/DH/IbArcGj7K/8YDFUHiaupr/dQzQDLWrvhr06cABETENsgqDTyVgjWBE28iyCNFoxT3TCBFJdLYGDEWJGjBKvuYmgLF0fK3QdlfRgCCIWjrAJw7Xj5NgueyXdUxltMnMoDGEGxlNuqlk9CBQnMqIoyG00xsOdtdd0/Xnf5vFPBR8Et1FZPpm28c+ahKcEq7wlmHwD3DYADx6SKQfqnbUoVg7LbDKqdxLhIWxC2tNn/IP0bKa4EmepHBsHW2Ua0kbNPZEn5u6Qm3iOpJmRXWuIDGvxpKrJoHtWg1iE2z1GLTo+oLTkj+3FK0SghS8qYGPcQ2+OUhFFNDXDEEFb7aJB+tA4sHvjim0MoJexvoabz65nLRRzMeGLKRcX/wIDAQABo2MwYTAdBgNVHQ4EFgQUIBH3NSAUdZ8mIC+A6fuaHcQ9NNUwHwYDVR0jBBgwFoAUIBH3NSAUdZ8mIC+A6fuaHcQ9NNUwDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBADVMCkvKCsxmsVrjbikmvNggW3YQ2QPc12IytqA2pIUmpvRAq9/iDtyr7HcmCbDyGfQo+7CQsIvGdNImyaNsGIq6sQfQNB1lAjto8cRYXR+vL4PgV4xeKTI9sHNwcC5DWmlPRT3PoMnZx0x5SmI24is1CI54UbuTkQuHKZQGnCNuktH767DIY72cTqATSEnFtvcl7jQmK+5YbTzVqR89R+Q3SRzvejAD5kjv6gzK6qNaQ/dSZT6+LoK3518UhDL57gKvvtHwzgY7KS8Taj6v0zYQ0Md+3Ge1bgHqZDgPN8UJsgrzMoEst8lG3yMbqnbm9YC9NG9fTAiAW+NnKbp24HWiLYHM5CF5NSQ6ZOLD8yYQ4zEVEB7fgQH/dve8V8HEoT9cRh7g0nBOJn8U9dpRd5f1EEylc/7AKjcMf+E3P5UQYqyIXclaOntw4c1kFA2D5wSZIn/OZkrkINvwaDFowVD88tp6JrBYa3Kc74zeLczCSM+IgFfdaKSpLGCH5HVvhJnzJ80nzcwF3SfXkJdEAVpLJeQWlwS5EvTiu/13B4tkc0qfulbJ89+e+HKDjXqmVThwXMLSwbva85+4+76VVkPZ3ntonIMI/VH8ZH4uBSAYk8dY4ySjdCB1gZutQT5V2Pz4oEiWfdEXACTXMtWUW9SMPFbwkvs68t03v1y4Erk1-----END CERTIFICATE-----",%0"id": 0%0}%0],%0"id": "e8aa927f1edd6d5d8fb4618c5b2833788080024a283a2fd9de09e568b18ca477",%0"name": "EZ Provider",%0"nodeType": "residential",%0"terms": "None",%0"wallet": "iz5LcMEPEmoemuu55vZdd6hp9Akfa3FNNDFuzNPPMtWx3t3RyufnqWVgdHaUN5sSEieFgmKxFrL7V24ytunpe6se1Cb87SLLr"%0},%0"services": [%0{%0"allowRefunds": false,%0"certificates": [%0{%0"id": 0%0}%0],%0"cost": "1.00000000",%0"disable": false,%0"downloadSpeed": 10240000,%0"firstPrePaidMinutes": 20,%0"firstVerificationsNeeded": 0,%0"id": "1A",%0"name": "USEast",%0"proxy": [%0{%0"endpoint": "18.222.173.72",%0"port": "8080/TCP"%0}%0],%0"subsequentPrePaidMinutes": 30,%0"subsequentVerificationsNeeded": 0,%0"type": "proxy",%0"uploadSpeed": 10240000,%0"vpn": []%0}%0]%0}' http://localhost:3000/v1/services/add


// invalid header (replaced 1 digit at the end of the header signature)
curl -i -H "Content-Type: application/json" -H "JWS: eyJhbGciOiJFZERTQSJ9.ewogICAicHJvdG9jb2xWZXJzaW9uIjogMSwKICAgInByb3ZpZGVyIjogewogICAgICAiY2VydGlmaWNhdGVzIjogWwogICAgICAgICB7CiAgICAgICAgICAgICJjbiI6ICJpZ25vcmVkIiwKICAgICAgICAgICAgImNvbnRlbnQiOiAiLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tTUlJRkdEQ0NBd0NnQXdJQkFnSUpBUFNTeUNSNFlpZ0tNQTBHQ1NxR1NJYjNEUUVCQ3dVQU1Ca3hGekFWQmdOVkJBTU1Ea2xVVGxORllYTjVSR1Z3Ykc5NU1CNFhEVEU0TURnek1ERTRNVGt3TkZvWERUTTRNRGd5TlRFNE1Ua3dORm93R1RFWE1CVUdBMVVFQXd3T1NWUk9VMFZoYzNsRVpYQnNiM2t3Z2dJaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQ0R3QXdnZ0lLQW9JQ0FRQ3QrL2VQLy85NFZPdHo4WSs5WHQrM1RBRGRselhGV256ZC9YYVNXSksxTnpPRS9XbG5DZTlpWWlxNzhkbjFEQmF2UkhxRkRnbzJlbmlsL2xtY2I4aFZVK1VNTHNRS05aYlJFUXAxc0VoS0JlaFUyK1B0cUVzTnhSNVdSdVNtYzJOUnowZ1doWitNY01SeW5wQTZIcnlYMTVrQWR6LzF3Y2tRSzcwWDhrUndJWUowbFVDNnRpR1ViR0FUSzA4QVFKTU81SVdaTUp6WlhvYkkrcm1yMzAyYS81Y1BHSFhCdXo1WXhhSXFRNEIxeWlwRk1hVFZGeTdCcUQrKzY5YUVrMDJJdTdYb29FaXVjcWg4RkQwTFZmRi9MSzdEZ1BLbEVFVmFXYmtKcUlpSGgrTFdoL0RIL0liQXJjR2o3Sy84WURGVUhpYXVwci9kUXpRRExXcnZocjA2Y0FCRVRFTnNncURUeVZnaldCRTI4aXlDTkZveFQzVENCRkpkTFlHREVXSkdqQkt2dVltZ0xGMGZLM1FkbGZSZ0NDSVdqckFKdzdYajVOZ3VleVhkVXhsdE1uTW9ER0VHeGxOdXFsazlDQlFuTXFJb3lHMDB4c09kdGRkMC9YbmY1dkZQQlI4RXQxRlpQcG0yOGMrYWhLY0VxN3dsbUh3RDNEWUFEeDZTS1FmcW5iVW9WZzdMYkRLcWR4TGhJV3hDMnRObi9JUDBiS2E0RW1lcEhCc0hXMlVhMGtiTlBaRW41dTZRbTNpT3BKbVJYV3VJREd2eHBLckpvSHRXZzFpRTJ6MUdMVG8rb0xUa2orM0ZLMFNnaFM4cVlHUGNRMitPVWhGRk5EWERFRUZiN2FKQit0QTRzSHZqaW0wTW9KZXh2b2FiejY1bkxSUnpNZUdMS1JjWC93SURBUUFCbzJNd1lUQWRCZ05WSFE0RUZnUVVJQkgzTlNBVWRaOG1JQytBNmZ1YUhjUTlOTlV3SHdZRFZSMGpCQmd3Rm9BVUlCSDNOU0FVZFo4bUlDK0E2ZnVhSGNROU5OVXdEd1lEVlIwVEFRSC9CQVV3QXdFQi96QU9CZ05WSFE4QkFmOEVCQU1DQVlZd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dJQkFEVk1Da3ZLQ3N4bXNWcmpiaWttdk5nZ1czWVEyUVBjMTJJeXRxQTJwSVVtcHZSQXE5L2lEdHlyN0hjbUNiRHlHZlFvKzdDUXNJdkdkTklteWFOc0dJcTZzUWZRTkIxbEFqdG84Y1JZWFIrdkw0UGdWNHhlS1RJOXNITndjQzVEV21sUFJUM1BvTW5aeDB4NVNtSTI0aXMxQ0k1NFVidVRrUXVIS1pRR25DTnVrdEg3NjdESVk3MmNUcUFUU0VuRnR2Y2w3alFtSys1WWJUelZxUjg5UitRM1NSenZlakFENWtqdjZneks2cU5hUS9kU1pUNitMb0szNTE4VWhETDU3Z0t2dnRId3pnWTdLUzhUYWo2djB6WVEwTWQrM0dlMWJnSHFaRGdQTjhVSnNncnpNb0VzdDhsRzN5TWJxbmJtOVlDOU5HOWZUQWlBVytObkticDI0SFdpTFlITTVDRjVOU1E2Wk9MRDh5WVE0ekVWRUI3ZmdRSC9kdmU4VjhIRW9UOWNSaDdnMG5CT0puOFU5ZHBSZDVmMUVFeWxjLzdBS2pjTWYrRTNQNVVRWXF5SVhjbGFPbnR3NGMxa0ZBMkQ1d1NaSW4vT1prcmtJTnZ3YURGb3dWRDg4dHA2SnJCWWEzS2M3NHplTGN6Q1NNK0lnRmZkYUtTcExHQ0g1SFZ2aEpueko4MG56Y3dGM1NmWGtKZEVBVnBMSmVRV2x3UzVFdlRpdS8xM0I0dGtjMHFmdWxiSjg5K2UrSEtEalhxbVZUaHdYTUxTd2J2YTg1KzQrNzZWVmtQWjNudG9uSU1JL1ZIOFpINHVCU0FZazhkWTR5U2pkQ0IxZ1p1dFFUNVYyUHo0b0VpV2ZkRVhBQ1RYTXRXVVc5U01QRmJ3a3ZzNjh0MDN2MXk0RXJrMS0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0iLAogICAgICAgICAgICAiaWQiOiAwCiAgICAgICAgIH0KICAgICAgXSwKICAgICAgImlkIjogImU4YWE5MjdmMWVkZDZkNWQ4ZmI0NjE4YzViMjgzMzc4ODA4MDAyNGEyODNhMmZkOWRlMDllNTY4YjE4Y2E0NzciLAogICAgICAibmFtZSI6ICJFWiBQcm92aWRlciIsCiAgICAgICJub2RlVHlwZSI6ICJyZXNpZGVudGlhbCIsCiAgICAgICJ0ZXJtcyI6ICJOb25lIiwKICAgICAgIndhbGxldCI6ICJpejVMY01FUEVtb2VtdXU1NXZaZGQ2aHA5QWtmYTNGTk5ERnV6TlBQTXRXeDN0M1J5dWZucVdWZ2RIYVVONXNTRWllRmdtS3hGckw3VjI0eXR1bnBlNnNlMUNiODdTTExyIgogICB9LAogICAic2VydmljZXMiOiBbCiAgICAgIHsKICAgICAgICAgImFsbG93UmVmdW5kcyI6IGZhbHNlLAogICAgICAgICAiY2VydGlmaWNhdGVzIjogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICJpZCI6IDAKICAgICAgICAgICAgfQogICAgICAgICBdLAogICAgICAgICAiY29zdCI6ICIxLjAwMDAwMDAwIiwKICAgICAgICAgImRpc2FibGUiOiBmYWxzZSwKICAgICAgICAgImRvd25sb2FkU3BlZWQiOiAxMDI0MDAwMCwKICAgICAgICAgImZpcnN0UHJlUGFpZE1pbnV0ZXMiOiAyMCwKICAgICAgICAgImZpcnN0VmVyaWZpY2F0aW9uc05lZWRlZCI6IDAsCiAgICAgICAgICJpZCI6ICIxQSIsCiAgICAgICAgICJuYW1lIjogIlVTRWFzdCIsCiAgICAgICAgICJwcm94eSI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICAiZW5kcG9pbnQiOiAiMTguMjIyLjE3My43MiIsCiAgICAgICAgICAgICAgICJwb3J0IjogIjgwODAvVENQIgogICAgICAgICAgICB9CiAgICAgICAgIF0sCiAgICAgICAgICJzdWJzZXF1ZW50UHJlUGFpZE1pbnV0ZXMiOiAzMCwKICAgICAgICAgInN1YnNlcXVlbnRWZXJpZmljYXRpb25zTmVlZGVkIjogMCwKICAgICAgICAgInR5cGUiOiAicHJveHkiLAogICAgICAgICAidXBsb2FkU3BlZWQiOiAxMDI0MDAwMCwKICAgICAgICAgInZwbiI6IFtdCiAgICAgIH0KICAgXQp9.4e076a50d0b271c15804915bc53a884351cb599d59b4ad09d6f09cf48cfad061a3f0d9ca8d88f2d34ce88bfd00aa551633725d0bb9d32ee0d7a601540bfca102" -X POST -d '{ "protocolVersion": 1, "provider": { "certificates": [ { "cn": "ignored", "content": "MIIFEjCCAvqgAwIBAgIJAJg7i8hhxevBMA0GCSqGSIb3DQEBCwUAMBYxFDASBgNVBAMMC05vYm9keSBIb21lMB4XDTE4MDgwMTIxMjYzOVoXDTM4MDcyNzIxMjYzOVowFjEUMBIGA1UEAwwLTm9ib2R5IEhvbWUwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDKoBznvvVc7ew58/Qsq0wAk2qD6/z/3QvdsCh3p91Nm40Ul6PzLBsGZvg2xg5dBBYxEhCSfE7VgnSQFOVRr8UjqtDfwOfFju3qsfUi3plPD0Ag6Zc2HFcnJf5m/h65NSDXq0AahxqiF/XikjpZcf7g4QIKNlNVD33Zv6I7f/sbmUPufwA30mrdgHghFBic7zoi3tosrxiT+QgDKTU6bvy+TrECLZ5E2CCEdJVqEbO0ikyVsxnJW6KLaKkGKmCnfIvdJd1Cgro01b1QRd9vJr35+1C+MIToKkYqVFxLDJCNOx36NTelZMAek5ixfttYDNv4H0iL2NE7h+BVJQan1MwmTwCWy5J+zwP3LY4zfnEuIk67n3suYwHuvfp8excBCklqs/2UlYbs8OgYWjQL1CXsme4rf5WdL4lVxjHmWwzeXfGZgLimrPTpKLT6uwOlcZAc+4jrSAvCwlQFDVke4zF3GMi/pzbSkx8WFkClbYzcrUxnD51QQ8n7ko6NeHMnHpuEGgCwy665aaxffakmzIxdPH1aVD1SJl6zW/1gXUPRFQFz/G2ID+QcYvuLz7OtFZbJJ+OJoP93uJrzq0cdO+HMFpXuGZfrhui/Szmv5KuFuwGWDDzPdycf9eOUFc/OHdPAtsT7bGVyZ/mtim8eZI0b6WBUYx1FUXmJjgcvOtVPrQIDAQABo2MwYTAdBgNVHQ4EFgQU9P7BhSiEb2RtwcdEleCc0BkZTw4wHwYDVR0jBBgwFoAU9P7BhSiEb2RtwcdEleCc0BkZTw4wDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAAfjWwvbvaSp1T+QotbmRVzy2p6x7mJKYQkJa1P+rz1TpeWwweWVPdXNQkPD0aI+diy9C2ahYa+OrKe1r60bj+VRQvMKgekdheOiW82F98xMRE/wbT7QRfWITOj1TUZtFabk9X+F25yIziL3+JEsqBW2NzFlk0M13ZUJRsW9pZ/ERmLEpGCY2moKZaFC5Olziw3rAj42FD65wc5P7v2h8srMotUm5XQDcdw+vBwz8zVlWYDvaa2BoCcPvxsHUkAh9z8iO/V1FOZ/SAoQUR9pjrvqAiwo02UqsL3aUGlRuYsMvQBwebwvk3HYMcHgmAbLIcQGF9/pb1XIf2PSrWNAldl7sCOqXs34Q+7vW37myZdKNTRrqpbRZS0Gykf/LhVQesPolps/4KG0kMot9asMFiXQSsuac9FCVLrBCdOen5HIMiRjxKRhYcbKIeOZoMabYJnI4idLjuWniRplAjcBBP68XKK+/FQGR4/g8oG4QFK6WlVZ4fid4N1ETDJCuFo9JEf10uuBICDhJIOn4LtkpcAbgAUa5EkHgpAkdC6ESWNxlLDqZECq8iIM71RWAM8amtxeG7FPvU1zxqtLqtTP4sYGazOIY0QKKE/TdXXVyu5bb4GgyPWk0UTH2FlxNzI55dY2HwjxzzLpzZGE8BYc6v5NvbjJlsmdgekA3CAWJib3", "id": 0 } ], "id": "fa8e130e142c49320fa0fc201a767809e4150a3d59ff9262df91ed4ce626df1a", "name": "Provider", "nodeType": "residential", "terms": "{providerterms}", "wallet": "izxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }, "services": [ { "allowRefunds": "false", "certificates": [ { "id": 0 } ], "cost": 10, "disable": "false", "downloadSpeed": 10, "firstPrePaidMinutes": 2, "firstVerificationsNeeded": 1, "id": "10", "name": "Test srv11", "proxy": [ { "endpoint": "10.0.0.1", "port": "65001/TCP" } ], "subsequentPrePaidMinutes": 2, "subsequentVerificationsNeeded": 1, "type": "proxy", "uploadSpeed": 1, "vpn": null } ] }' http://localhost:3000/v1/services/add


// invalid header (changed the provider id in the header body)
curl -i -H "Content-Type: application/json" -H "JWS: eyJhbGciOiJFZERTQSJ9.ewogICAicHJvdG9jb2xWZXJzaW9uIjogMSwKICAgInByb3ZpZGVyIjogewogICAgICAiY2VydGlmaWNhdGVzIjogWwogICAgICAgICB7CiAgICAgICAgICAgICJjbiI6ICJpZ25vcmVkIiwKICAgICAgICAgICAgImNvbnRlbnQiOiAiLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tTUlJRkdEQ0NBd0NnQXdJQkFnSUpBUFNTeUNSNFlpZ0tNQTBHQ1NxR1NJYjNEUUVCQ3dVQU1Ca3hGekFWQmdOVkJBTU1Ea2xVVGxORllYTjVSR1Z3Ykc5NU1CNFhEVEU0TURnek1ERTRNVGt3TkZvWERUTTRNRGd5TlRFNE1Ua3dORm93R1RFWE1CVUdBMVVFQXd3T1NWUk9VMFZoYzNsRVpYQnNiM2t3Z2dJaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQ0R3QXdnZ0lLQW9JQ0FRQ3QrL2VQLy85NFZPdHo4WSs5WHQrM1RBRGRselhGV256ZC9YYVNXSksxTnpPRS9XbG5DZTlpWWlxNzhkbjFEQmF2UkhxRkRnbzJlbmlsL2xtY2I4aFZVK1VNTHNRS05aYlJFUXAxc0VoS0JlaFUyK1B0cUVzTnhSNVdSdVNtYzJOUnowZ1doWitNY01SeW5wQTZIcnlYMTVrQWR6LzF3Y2tRSzcwWDhrUndJWUowbFVDNnRpR1ViR0FUSzA4QVFKTU81SVdaTUp6WlhvYkkrcm1yMzAyYS81Y1BHSFhCdXo1WXhhSXFRNEIxeWlwRk1hVFZGeTdCcUQrKzY5YUVrMDJJdTdYb29FaXVjcWg4RkQwTFZmRi9MSzdEZ1BLbEVFVmFXYmtKcUlpSGgrTFdoL0RIL0liQXJjR2o3Sy84WURGVUhpYXVwci9kUXpRRExXcnZocjA2Y0FCRVRFTnNncURUeVZnaldCRTI4aXlDTkZveFQzVENCRkpkTFlHREVXSkdqQkt2dVltZ0xGMGZLM1FkbGZSZ0NDSVdqckFKdzdYajVOZ3VleVhkVXhsdE1uTW9ER0VHeGxOdXFsazlDQlFuTXFJb3lHMDB4c09kdGRkMC9YbmY1dkZQQlI4RXQxRlpQcG0yOGMrYWhLY0VxN3dsbUh3RDNEWUFEeDZTS1FmcW5iVW9WZzdMYkRLcWR4TGhJV3hDMnRObi9JUDBiS2E0RW1lcEhCc0hXMlVhMGtiTlBaRW41dTZRbTNpT3BKbVJYV3VJREd2eHBLckpvSHRXZzFpRTJ6MUdMVG8rb0xUa2orM0ZLMFNnaFM4cVlHUGNRMitPVWhGRk5EWERFRUZiN2FKQit0QTRzSHZqaW0wTW9KZXh2b2FiejY1bkxSUnpNZUdMS1JjWC93SURBUUFCbzJNd1lUQWRCZ05WSFE0RUZnUVVJQkgzTlNBVWRaOG1JQytBNmZ1YUhjUTlOTlV3SHdZRFZSMGpCQmd3Rm9BVUlCSDNOU0FVZFo4bUlDK0E2ZnVhSGNROU5OVXdEd1lEVlIwVEFRSC9CQVV3QXdFQi96QU9CZ05WSFE4QkFmOEVCQU1DQVlZd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dJQkFEVk1Da3ZLQ3N4bXNWcmpiaWttdk5nZ1czWVEyUVBjMTJJeXRxQTJwSVVtcHZSQXE5L2lEdHlyN0hjbUNiRHlHZlFvKzdDUXNJdkdkTklteWFOc0dJcTZzUWZRTkIxbEFqdG84Y1JZWFIrdkw0UGdWNHhlS1RJOXNITndjQzVEV21sUFJUM1BvTW5aeDB4NVNtSTI0aXMxQ0k1NFVidVRrUXVIS1pRR25DTnVrdEg3NjdESVk3MmNUcUFUU0VuRnR2Y2w3alFtSys1WWJUelZxUjg5UitRM1NSenZlakFENWtqdjZneks2cU5hUS9kU1pUNitMb0szNTE4VWhETDU3Z0t2dnRId3pnWTdLUzhUYWo2djB6WVEwTWQrM0dlMWJnSHFaRGdQTjhVSnNncnpNb0VzdDhsRzN5TWJxbmJtOVlDOU5HOWZUQWlBVytObkticDI0SFdpTFlITTVDRjVOU1E2Wk9MRDh5WVE0ekVWRUI3ZmdRSC9kdmU4VjhIRW9UOWNSaDdnMG5CT0puOFU5ZHBSZDVmMUVFeWxjLzdBS2pjTWYrRTNQNVVRWXF5SVhjbGFPbnR3NGMxa0ZBMkQ1d1NaSW4vT1prcmtJTnZ3YURGb3dWRDg4dHA2SnJCWWEzS2M3NHplTGN6Q1NNK0lnRmZkYUtTcExHQ0g1SFZ2aEpueko4MG56Y3dGM1NmWGtKZEVBVnBMSmVRV2x3UzVFdlRpdS8xM0I0dGtjMHFmdWxiSjg5K2UrSEtEalhxbVZUaHdYTUxTd2J2YTg1KzQrNzZWVmtQWjNudG9uSU1JL1ZIOFpINHVCU0FZazhkWTR5U2pkQ0IxZ1p1dFFUNVYyUHo0b0VpV2ZkRVhBQ1RYTXRXVVc5U01QRmJ3a3ZzNjh0MDN2MXk0RXJrMS0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0iLAogICAgICAgICAgICAiaWQiOiAwCiAgICAgICAgIH0KICAgICAgXSwKICAgICAgImlkIjogImU4YWE5MjdmMWVkZDZkNWQ4ZmI0NjE4YzViMjgzMzc4ODA4MDAyNGEyODNhMmZkOWRlMDllNTY4YjE4Y2E0NzgiLAogICAgICAibmFtZSI6ICJFWiBQcm92aWRlciIsCiAgICAgICJub2RlVHlwZSI6ICJyZXNpZGVudGlhbCIsCiAgICAgICJ0ZXJtcyI6ICJOb25lIiwKICAgICAgIndhbGxldCI6ICJpejVMY01FUEVtb2VtdXU1NXZaZGQ2aHA5QWtmYTNGTk5ERnV6TlBQTXRXeDN0M1J5dWZucVdWZ2RIYVVONXNTRWllRmdtS3hGckw3VjI0eXR1bnBlNnNlMUNiODdTTExyIgogICB9LAogICAic2VydmljZXMiOiBbCiAgICAgIHsKICAgICAgICAgImFsbG93UmVmdW5kcyI6IGZhbHNlLAogICAgICAgICAiY2VydGlmaWNhdGVzIjogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICJpZCI6IDAKICAgICAgICAgICAgfQogICAgICAgICBdLAogICAgICAgICAiY29zdCI6ICIxLjAwMDAwMDAwIiwKICAgICAgICAgImRpc2FibGUiOiBmYWxzZSwKICAgICAgICAgImRvd25sb2FkU3BlZWQiOiAxMDI0MDAwMCwKICAgICAgICAgImZpcnN0UHJlUGFpZE1pbnV0ZXMiOiAyMCwKICAgICAgICAgImZpcnN0VmVyaWZpY2F0aW9uc05lZWRlZCI6IDAsCiAgICAgICAgICJpZCI6ICIxQSIsCiAgICAgICAgICJuYW1lIjogIlVTRWFzdCIsCiAgICAgICAgICJwcm94eSI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICAiZW5kcG9pbnQiOiAiMTguMjIyLjE3My43MiIsCiAgICAgICAgICAgICAgICJwb3J0IjogIjgwODAvVENQIgogICAgICAgICAgICB9CiAgICAgICAgIF0sCiAgICAgICAgICJzdWJzZXF1ZW50UHJlUGFpZE1pbnV0ZXMiOiAzMCwKICAgICAgICAgInN1YnNlcXVlbnRWZXJpZmljYXRpb25zTmVlZGVkIjogMCwKICAgICAgICAgInR5cGUiOiAicHJveHkiLAogICAgICAgICAidXBsb2FkU3BlZWQiOiAxMDI0MDAwMCwKICAgICAgICAgInZwbiI6IFtdCiAgICAgIH0KICAgXQp9.4e076a50d0b271c15804915bc53a884351cb599d59b4ad09d6f09cf48cfad061a3f0d9ca8d88f2d34ce88bfd00aa551633725d0bb9d32ee0d7a601540bfca102" -X POST -d '{ "protocolVersion": 1, "provider": { "certificates": [ { "cn": "ignored", "content": "MIIFEjCCAvqgAwIBAgIJAJg7i8hhxevBMA0GCSqGSIb3DQEBCwUAMBYxFDASBgNVBAMMC05vYm9keSBIb21lMB4XDTE4MDgwMTIxMjYzOVoXDTM4MDcyNzIxMjYzOVowFjEUMBIGA1UEAwwLTm9ib2R5IEhvbWUwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDKoBznvvVc7ew58/Qsq0wAk2qD6/z/3QvdsCh3p91Nm40Ul6PzLBsGZvg2xg5dBBYxEhCSfE7VgnSQFOVRr8UjqtDfwOfFju3qsfUi3plPD0Ag6Zc2HFcnJf5m/h65NSDXq0AahxqiF/XikjpZcf7g4QIKNlNVD33Zv6I7f/sbmUPufwA30mrdgHghFBic7zoi3tosrxiT+QgDKTU6bvy+TrECLZ5E2CCEdJVqEbO0ikyVsxnJW6KLaKkGKmCnfIvdJd1Cgro01b1QRd9vJr35+1C+MIToKkYqVFxLDJCNOx36NTelZMAek5ixfttYDNv4H0iL2NE7h+BVJQan1MwmTwCWy5J+zwP3LY4zfnEuIk67n3suYwHuvfp8excBCklqs/2UlYbs8OgYWjQL1CXsme4rf5WdL4lVxjHmWwzeXfGZgLimrPTpKLT6uwOlcZAc+4jrSAvCwlQFDVke4zF3GMi/pzbSkx8WFkClbYzcrUxnD51QQ8n7ko6NeHMnHpuEGgCwy665aaxffakmzIxdPH1aVD1SJl6zW/1gXUPRFQFz/G2ID+QcYvuLz7OtFZbJJ+OJoP93uJrzq0cdO+HMFpXuGZfrhui/Szmv5KuFuwGWDDzPdycf9eOUFc/OHdPAtsT7bGVyZ/mtim8eZI0b6WBUYx1FUXmJjgcvOtVPrQIDAQABo2MwYTAdBgNVHQ4EFgQU9P7BhSiEb2RtwcdEleCc0BkZTw4wHwYDVR0jBBgwFoAU9P7BhSiEb2RtwcdEleCc0BkZTw4wDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAAfjWwvbvaSp1T+QotbmRVzy2p6x7mJKYQkJa1P+rz1TpeWwweWVPdXNQkPD0aI+diy9C2ahYa+OrKe1r60bj+VRQvMKgekdheOiW82F98xMRE/wbT7QRfWITOj1TUZtFabk9X+F25yIziL3+JEsqBW2NzFlk0M13ZUJRsW9pZ/ERmLEpGCY2moKZaFC5Olziw3rAj42FD65wc5P7v2h8srMotUm5XQDcdw+vBwz8zVlWYDvaa2BoCcPvxsHUkAh9z8iO/V1FOZ/SAoQUR9pjrvqAiwo02UqsL3aUGlRuYsMvQBwebwvk3HYMcHgmAbLIcQGF9/pb1XIf2PSrWNAldl7sCOqXs34Q+7vW37myZdKNTRrqpbRZS0Gykf/LhVQesPolps/4KG0kMot9asMFiXQSsuac9FCVLrBCdOen5HIMiRjxKRhYcbKIeOZoMabYJnI4idLjuWniRplAjcBBP68XKK+/FQGR4/g8oG4QFK6WlVZ4fid4N1ETDJCuFo9JEf10uuBICDhJIOn4LtkpcAbgAUa5EkHgpAkdC6ESWNxlLDqZECq8iIM71RWAM8amtxeG7FPvU1zxqtLqtTP4sYGazOIY0QKKE/TdXXVyu5bb4GgyPWk0UTH2FlxNzI55dY2HwjxzzLpzZGE8BYc6v5NvbjJlsmdgekA3CAWJib3", "id": 0 } ], "id": "fa8e130e142c49320fa0fc201a767809e4150a3d59ff9262df91ed4ce626df1a", "name": "Provider", "nodeType": "residential", "terms": "{providerterms}", "wallet": "izxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }, "services": [ { "allowRefunds": "false", "certificates": [ { "id": 0 } ], "cost": 10, "disable": "false", "downloadSpeed": 10, "firstPrePaidMinutes": 2, "firstVerificationsNeeded": 1, "id": "10", "name": "Test srv11", "proxy": [ { "endpoint": "10.0.0.1", "port": "65001/TCP" } ], "subsequentPrePaidMinutes": 2, "subsequentVerificationsNeeded": 1, "type": "proxy", "uploadSpeed": 1, "vpn": null } ] }' http://localhost:3000/v1/services/add


*/


exports.services_post = function(req, res) {
	if (typeof (req.headers.jws) == "undefined") {
		res.status(400).json({ status: '103', message: 'headers signature value must not be empty'});
		return;
	}

	// split the content we get in the headers
	var headerParts = req.headers.jws.split(".");

	// check if the header has the correct format and content
	if (headerParts.length != 3) {
		res.status(400).json({ status: '102', message: 'Invalid Headers'});
		return;
	}

	var headerAlgo = headerParts[0];
	var headerBody = headerParts[1];
	var headerSignature = headerParts[2]; // already in hex format

	console.log("Algo");
	console.log(headerAlgo);
	console.log("Body");
	console.log(headerBody);
	console.log("Signature");
	console.log(headerSignature);

	var signatureHex = headerSignature;
	console.log("HEX Signature");
	console.log(signatureHex);

	// decode and parse header content into json to get public key
	var body = JSON.parse(Buffer.from(headerBody, 'base64'));

	// override any request body that might have been sent with the value from the header
	req.body = body;

	// get the publickey, which is the provider id from the header body
	var providerID = body.provider.id;

	var key = ec.keyFromPublic(providerID);
	console.log("Provider ID Key");
	console.log(providerID);

	// payload must be converted to hex for validation
	var signedPayload = headerBody;

	console.log("Payload to validate");
	console.log(signedPayload);

	var signedPayloadHex = Buffer.from(signedPayload).toString('hex');
	var validSignature = false;

	try {
		validSignature = key.verify(signedPayloadHex, signatureHex);
	} catch (error) {
		res.status(400).json({ status: '100', message: 'Header Validation failed'});
		return;
	}


	if (validSignature) {
		console.log('JWS Header Validated\n\n\n\n');
		if (Protocol.protocolCheckSchema(req.body) === true) {
			if (Provider.providerCheckSchema(req.body.provider) === true) {
				var param = {
					TableName: PROVIDERS_TABLE,
					Key: {
						id: req.body.provider.id,
					},
				}

				dynamoDb.get(param, (error, result) => {
					if (error) {
						console.log(error);
					}

					if (result.Item) {
						value = result.Item

						//format date to compare
						var dt = new Date(value.dateEnd);
						dt = datetime.create(dt);
						dateEnd = dt.format('m/d/Y H:M:S');

						var dt = new Date();
						dt = datetime.create(dt);
						var dateNow = dt.format('m/d/Y H:M:S');

						if (Date.parse(dateEnd) <= Date.parse(dateNow)) {
							res.status(400).json({ status: '1001', message: 'You have to pay for the subscription before submitting your services'});
						} else {
							const makeRequestProvider = async () => {

								await providerMiddlewareController.providerAdd_middleware_controller(value, req.body.provider)

								if (Services.servicesCheckSchema(req.body) === true) {
									var paramService = {
											TableName: SERVICES_TABLE,
										}

									// dynamoBd from server.js
									dynamoDb.scan(paramService, (error, result) => {
										console.log("scan providers table");

										if (error) {
											console.log("Error to read the providers table");
											return;
										}
										else if (result.Items.length >= 1) {
											result.Items.forEach(function(serv) {
												req.body.services.forEach(function(data) {
													console.log("goig to create a history");
													if (serv.id == data.id && serv.provider == req.body.provider.id) {
														console.log("has service to create history");
														value = serv
														uuid = uuidv1();
														const historyParam = {
															TableName: SERVICES_HISTORY_TABLE,
															Item: {
																uuid: uuid,
																service: serv.id,
																provider: req.body.provider.id,
																name: value.name,
																type: value.type,
																cost: value.cost,
																firstPrePaidMinutes: value.firstPrePaidMinutes,
																firstVerificationsNeeded: value.firstVerificationsNeeded,
																subsequentPrePaidMinutes: value.subsequentPrePaidMinutes,
																subsequentVerificationsNeeded: value.subsequentVerificationsNeeded,
																allowRefunds: value.allowRefunds,
																downloadSpeed: value.downloadSpeed,
																uploadSpeed: value.uploadSpeed,
																proxy: value.proxy,
																vpn: value.vpn,
																validity: value.validity,
																disable: value.disable,
																certificates: value.certificates,
																lastUpdate: value.date
															}
														}

														dynamoDb.put(historyParam, (error, result) => {
															if (error) {
																console.log(error);
															}
														});

														console.log("service add to history")
													}
												});
											});
										}

										req.body.services.forEach(function(data) {
											var paramsService = {
												TableName: SERVICES_TABLE,
												Key: {
													id: data.id,
													provider: req.body.provider.id
												},
											}

											var freeService = false;

											dynamoDb.get(paramsService, (error, resultGetService) => {
												if (error) {
													console.log(error);
												}

												if (resultGetService.Item) {
													if (resultGetService.Item.freeService == true) {
														freeService = resultGetService.Item.freeService;
													}
												}

												const addParam = {
													TableName: SERVICES_TABLE,
													Item: {
														id: data.id,
														provider: req.body.provider.id,
														name: data.name,
														type: data.type,
														cost: data.cost,
														firstPrePaidMinutes: data.firstPrePaidMinutes,
														firstVerificationsNeeded: data.firstVerificationsNeeded,
														subsequentPrePaidMinutes: data.subsequentPrePaidMinutes,
														subsequentVerificationsNeeded: data.subsequentVerificationsNeeded,
														allowRefunds: data.allowRefunds,
														downloadSpeed: data.downloadSpeed,
														uploadSpeed: data.uploadSpeed,
														proxy: data.proxy,
														vpn: data.vpn,
														validity: data.validity,
														disable: data.disable,
														certificates: data.certificates,
														date: dateNow,
														freeService: freeService
													},
												};

												dynamoDb.put(addParam, (error, result) => {
													if (error) {
														console.log(error);
													}
												});
											});
										});

									});

									setTimeout(function () {
									 	res.status(200).json({ status: '0', message: 'Service was created'});
									}, 800)
								} else {
									res.status(400).json({ status: '2000', message: Services.servicesCheckSchema(req.body)});
								}
							}
							makeRequestProvider();
						}
					} else {
						res.status(400).json({ status: '1000', message: 'Payment_id not found'});
					}
				})
			} else {
				res.status(400).json({ status: '3000', message: Provider.providerCheckSchema(req.body.provider)});
			}
		} else {
			res.status(400).json({ status: '5000', message: Protocol.protocolCheckSchema(req.body)});
		}
	} else {
		console.log("Header signature does not match\n\n\n\n");
		res.status(400).json({ status: '101', message: 'header signature does not match'});
	}
};








