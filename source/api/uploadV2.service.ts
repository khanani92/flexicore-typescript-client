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
 import { FlexiCoreDecycle } from './flexiCoreDecycle';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FileResource } from '../model/fileResource';
import { Job } from '../model/job';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { IUploadService } from './iUploadService.service';


@Injectable()
export class UploadV2Service implements IUploadService{

    protected basePath = 'https://192.168.0.41:8080/FlexiCore/rest';
    public defaultHeaders = new HttpHeaders();
    public configuration: Configuration = new Configuration();

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
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1, T2>(objA: T1, objB: T2) {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1 & T2>objA;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


     /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
      public getFileResource(md5?: string, observe?: 'body', reportProgress?: boolean): Observable<FileResource>;
      public getFileResource(md5?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FileResource>>;
      public getFileResource(md5?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FileResource>>;
      public getFileResource(md5?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
  
          let headers = this.defaultHeaders;
  
          // to determine the Accept header
          let httpHeaderAccepts: string[] = [
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
  
          return this.httpClient.get<FileResource>(`${this.basePath}/fileResource/${md5}`,
              {
                  withCredentials: this.configuration.withCredentials,
                  headers: headers,
                  observe: observe,
                  reportProgress: reportProgress
              }
          );
      }

       /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
        public uploadFileWithChunkMd5(md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, observe?: 'body', reportProgress?: boolean): Observable<FileResource>;
        public uploadFileWithChunkMd5(md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FileResource>>;
        public uploadFileWithChunkMd5(md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FileResource>>;
        public uploadFileWithChunkMd5(md5?: string, name?: string, chunkMd5?: string, lastChunk?: boolean, blob?: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
    
            let headers = this.defaultHeaders;
    
            if (md5 !== undefined && md5 !== null) {
                headers = headers.set('md5', String(md5));
            }
    
            if (name !== undefined && name !== null) {
                headers = headers.set('name', String(name));
            }
            if (chunkMd5 !== undefined && chunkMd5 !== null) {
                headers = headers.set('chunkMd5', String(chunkMd5));
            }
            if (lastChunk !== undefined && lastChunk !== null) {
                headers = headers.set('lastChunk', String(lastChunk));
            }
            headers = headers.set('Accept', ' application/json');
            headers = headers.set('Content-Type', 'application/octet-stream');
    
    
            return this.httpClient.post<FileResource>(`${this.basePath}/upload`,
                blob,
                {
                    withCredentials: this.configuration.withCredentials,
                    headers: headers,
                    observe: observe,
                    reportProgress: reportProgress
                }
            );
        }
  

}
