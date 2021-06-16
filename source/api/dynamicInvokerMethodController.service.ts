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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpResponse, HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { PaginationResponse } from '../model/paginationResponse';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import { InvokerMethodHolder } from '../model/InvokerMethodHolder';
import { FlexiCoreDecycle } from './api';
import { DynamicInvokerMethodFilter } from '../model/dynamicInvokerMethodFilter';


@Injectable()
export class DynamicInvokerMethodControllerService {

  protected basePath = 'https://169.254.121.191:8080/FlexiCore/rest';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  public getAllInvokerMethodHolders(authenticationKey?: string, body?: DynamicInvokerMethodFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<InvokerMethodHolder>>;
  public getAllInvokerMethodHolders(authenticationKey?: string, body?: DynamicInvokerMethodFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<InvokerMethodHolder>>>;
  public getAllInvokerMethodHolders(authenticationKey?: string, body?: DynamicInvokerMethodFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<InvokerMethodHolder>>>;
  public getAllInvokerMethodHolders(authenticationKey?: string, body?: DynamicInvokerMethodFilter, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    let headers = this.defaultHeaders;
    if (authenticationKey !== undefined && authenticationKey !== null) {
      headers = headers.set('authenticationKey', String(authenticationKey));
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      'application/json'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<PaginationResponse<InvokerMethodHolder>>(`${this.basePath}/dynamicInvokerMethod/getAllInvokerMethodHolders`,
      body,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    ).map(o => FlexiCoreDecycle.retrocycle(o));
  }

}
