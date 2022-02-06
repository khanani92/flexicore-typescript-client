"use strict";
/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V1.1.0
 * Contact: avishaybennatan@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsService = void 0;
/* tslint:disable:no-unused-variable member-ordering */
const core_1 = require("@angular/core");
const flexiCoreDecycle_1 = require("./flexiCoreDecycle");
const operators_1 = require("rxjs/operators");
const variables_1 = require("../variables");
const configuration_1 = require("../configuration");
const http_1 = require("@angular/common/http");
let PluginsService = class PluginsService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
        this.defaultHeaders = new http_1.HttpHeaders();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    extendObj(objA, objB) {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    listAllLoadedPlugins(authenticationKey, body, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.get(`${this.basePath}/plugins`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).pipe((0, operators_1.map)(o => flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(o)));
    }
    /**
    *
    * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
    */
    listAllModules(authenticationkey, extraHttpRequestParams) {
        return this.listAllModulesWithHttpInfo(authenticationkey, extraHttpRequestParams)
            .pipe((0, operators_1.map)((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        }));
    }
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    restart(authenticationkey, extraHttpRequestParams) {
        return this.restartWithHttpInfo(authenticationkey, extraHttpRequestParams)
            .pipe((0, operators_1.map)((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        }));
    }
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    testUpdate(authenticationkey, extraHttpRequestParams) {
        return this.testUpdateWithHttpInfo(authenticationkey, extraHttpRequestParams)
            .pipe((0, operators_1.map)((response) => {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(response.json()) || {};
            }
        }));
    }
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    listAllModulesWithHttpInfo(authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/plugins/modules';
        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [
            'application/json'
        ];
        let requestOptions = new http_1.HttpRequest('GET', path, {
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.httpClient.request(requestOptions).pipe((0, operators_1.map)(o => flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(o)));
    }
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    restartWithHttpInfo(authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/plugins';
        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [];
        let requestOptions = new http_1.HttpRequest('PUT', path, {
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.httpClient.request(requestOptions).pipe((0, operators_1.map)(o => flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(o)));
    }
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    testUpdateWithHttpInfo(authenticationkey, extraHttpRequestParams) {
        const path = this.basePath + '/plugins/testUpdate';
        let queryParameters = new URLSearchParams();
        let headers = this.defaultHeaders; // https://github.com/angular/angular/issues/6845
        if (authenticationkey !== undefined && authenticationkey !== null) {
            headers.set('authenticationkey', String(authenticationkey));
        }
        // to determine the Accept header
        let produces = [];
        let requestOptions = new http_1.HttpRequest('PUT', path, {
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.httpClient.request(requestOptions).pipe((0, operators_1.map)(o => flexiCoreDecycle_1.FlexiCoreDecycle.retrocycle(o)));
    }
};
PluginsService = __decorate([
    (0, core_1.Injectable)(),
    __param(1, (0, core_1.Optional)()),
    __param(1, (0, core_1.Inject)(variables_1.BASE_PATH)),
    __param(2, (0, core_1.Optional)())
], PluginsService);
exports.PluginsService = PluginsService;
//# sourceMappingURL=plugins.service.js.map