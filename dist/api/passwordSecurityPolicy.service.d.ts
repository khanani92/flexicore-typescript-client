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
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { HttpHeaders, HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { PasswordSecurityPolicy } from '../model/passwordSecurityPolicy';
import { PasswordSecurityPolicyCreate } from '../model/passwordSecurityPolicyCreate';
import { PasswordSecurityPolicyUpdate } from '../model/passwordSecurityPolicyUpdate';
import { PasswordSecurityPolicyFilter } from '../model/passwordSecurityPolicyFilter';
import { PaginationResponse } from '../model/models';
export declare class PasswordSecurityPolicyService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    createPolicy(authenticationkey?: string, body?: PasswordSecurityPolicyCreate, observe?: 'body', reportProgress?: boolean): Observable<PasswordSecurityPolicy>;
    createPolicy(authenticationkey?: string, body?: PasswordSecurityPolicyCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PasswordSecurityPolicy>>;
    createPolicy(authenticationkey?: string, body?: PasswordSecurityPolicyCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PasswordSecurityPolicy>>;
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    updatePolicy(authenticationkey?: string, body?: PasswordSecurityPolicyUpdate, observe?: 'body', reportProgress?: boolean): Observable<PasswordSecurityPolicy>;
    updatePolicy(authenticationkey?: string, body?: PasswordSecurityPolicyUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PasswordSecurityPolicy>>;
    updatePolicy(authenticationkey?: string, body?: PasswordSecurityPolicyUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PasswordSecurityPolicy>>;
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    getAllPolicy(authenticationkey?: string, body?: PasswordSecurityPolicyFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<PasswordSecurityPolicy>>;
    getAllPolicy(authenticationkey?: string, body?: PasswordSecurityPolicyFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<PasswordSecurityPolicy>>>;
    getAllPolicy(authenticationkey?: string, body?: PasswordSecurityPolicyFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<PasswordSecurityPolicy>>>;
}
