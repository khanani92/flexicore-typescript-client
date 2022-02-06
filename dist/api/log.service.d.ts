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
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { LogCreate } from '../model/logCreate';
export declare class LogService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * createPermissionGroup
     * creates Permission Group
     * @param body
     * @param authenticationkey
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    log(body?: LogCreate, authenticationkey?: string, observe?: 'body', reportProgress?: boolean): Observable<void>;
    log(body?: LogCreate, authenticationkey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<void>>;
    log(body?: LogCreate, authenticationkey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<void>>;
}
