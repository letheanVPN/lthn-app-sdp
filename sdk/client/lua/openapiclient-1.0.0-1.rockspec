package = "openapiclient"
version = "1.0.0-1"
source = {
	url = "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
}

description = {
	summary = "API client genreated by OpenAPI Generator",
	detailed = [[
Distributed Virtual Private Marketplace]],
	homepage = "https://openapi-generator.tech",
	license = "Unlicense",
	maintainer = "OpenAPI Generator contributors",
}

dependencies = {
	"lua >= 5.2",
	"http",
	"dkjson",
	"basexx"
}

build = {
	type = "builtin",
	modules = {
		["openapiclient.api.default_api"] = "openapiclient/api/default_api.lua";
		["openapiclient.api.provider_api"] = "openapiclient/api/provider_api.lua";
		["openapiclient.api.services_api"] = "openapiclient/api/services_api.lua";
		["openapiclient.model.certificates_entity"] = "openapiclient/model/certificates_entity.lua";
		["openapiclient.model.proxy_settings_entity"] = "openapiclient/model/proxy_settings_entity.lua";
		["openapiclient.model.service_entity"] = "openapiclient/model/service_entity.lua";
		["openapiclient.model.time_range_entity"] = "openapiclient/model/time_range_entity.lua";
		["openapiclient.model.vpn_settings_entity"] = "openapiclient/model/vpn_settings_entity.lua";
	}
}
