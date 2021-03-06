import { Credential } from './../models/credential';
import { MetadataTableFields } from './../models/metadata-table-fields';
import { ModelLink } from './../models/model-link';
import { ImsService } from './ims-service';
import { ModelTables } from './../models/model-tables';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ModelService {

  constructor(public imsService: ImsService) {

  }

  getMetadataFieldsOfImageTable(credential: Credential, archive: string): Observable<MetadataTableFields> {
    return this.getModelImageTableUrl(credential, archive).flatMap(tableUrl => {
      return this.imsService.get(credential, tableUrl).map(response => response.json());
    });
  }

  getModelImageTableUrl(credential: Credential, archive: string): Observable<string> {
    return this.getModelTables(credential, archive).map(modelTable => modelTable.tables[(modelTable.tables.length - 1)].dataHref);
  }

  getMetadataFieldsOfParentImageTable(credential: Credential, archive: string): Observable<MetadataTableFields> {
    return this.getModelParentImageTableUrl(credential, archive).flatMap(tableUrl => {
      return this.imsService.get(credential, tableUrl).map(response => response.json());
    });
  }

  getModelParentImageTableUrl(credential: Credential, archive: string): Observable<string> {
    return this.getModelTables(credential, archive).map(modelTable => modelTable.tables[(modelTable.tables.length - 2)].dataHref);
  }

  getModelTables(credential: Credential, archive: string): Observable<ModelTables> {
    return this.getModelArchiveUrl(credential, archive).flatMap(archiveUrl => {
      return this.imsService.get(credential, archiveUrl).map(response => response.json());
    });
  }

  getModelArchiveUrl(credential: Credential, archive: string): Observable<string> {
    return this.imsService.getModelArchives(credential).map(modelArchives => modelArchives.archives.find(this.findModelArchive, archive).dataHref);
  }

  private findModelArchive(this: string, modelArchive: ModelLink): boolean {
    return modelArchive.name === this;
  }

}
