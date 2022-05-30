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
import { UIComponent } from '../model/uIComponent';
import { UIComponentsRegistrationContainer } from '../model/uIComponentsRegistrationContainer';
import { Configuration } from '../configuration';
export declare class UIComponentService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj;
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     * registers components if not exists and returns allowed
     * @summary registerAndGetAllowedUIComponents
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    registerAndGetAllowedUIComponents(body?: UIComponentsRegistrationContainer, authenticationkey?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<UIComponent>>;
    registerAndGetAllowedUIComponents(body?: UIComponentsRegistrationContainer, authenticationkey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<UIComponent>>>;
    registerAndGetAllowedUIComponents(body?: UIComponentsRegistrationContainer, authenticationkey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<UIComponent>>>;
}