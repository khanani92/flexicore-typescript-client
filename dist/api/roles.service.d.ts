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
import { FilteringInformationHolder } from '../model/filteringInformationHolder';
import { Role } from '../model/role';
import { Configuration } from '../configuration';
import { RoleCreate } from '../model/roleCreate';
import { RoleUpdate } from '../model/roleUpdate';
import { RoleFilter } from '../model/roleFilter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export declare class RolesService {
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
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    createRole(authenticationkey?: string, body?: string, extraHttpRequestParams?: any): Observable<Role>;
    /**
    *
    * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
    * @param body
    */
    createRoleNew(authenticationkey?: string, body?: RoleCreate, extraHttpRequestParams?: any): Observable<Role>;
    /**
    *
    * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
    * @param body
    */
    updateRole(authenticationkey?: string, body?: RoleCreate, extraHttpRequestParams?: any): Observable<Role>;
    /**
     *
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    findById(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Role>;
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    listAllRoles(authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, extraHttpRequestParams?: any): Observable<Array<Role>>;
    /**
 *
 * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
 * @param body
 * @param pagesize Number of entries to be retrieved per page or -1 for full list
 * @param currentpage The current page or -1 for full list
 */
    getAllRoles(authenticationkey?: string, body?: RoleFilter, extraHttpRequestParams?: any): Observable<Array<Role>>;
    /**
     *
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    listAllUserRoles(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Array<Role>>;
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    createRoleWithHttpInfo(authenticationkey?: string, body?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    createRoleNewWithHttpInfo(authenticationkey?: string, body?: RoleCreate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    updateRoleWithHttpInfo(authenticationkey?: string, body?: RoleUpdate, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    findByIdWithHttpInfo(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     */
    listAllRolesWithHttpInfo(authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
    *
    *
    * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
    * @param body
    * @param pagesize Number of entries to be retrieved per page or -1 for full list
    * @param currentpage The current page or -1 for full list
    */
    getAllRolesWithHttpInfo(authenticationkey?: string, body?: RoleFilter, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    listAllUserRolesWithHttpInfo(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
}